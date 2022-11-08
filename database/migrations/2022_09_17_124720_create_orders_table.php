<?php

use App\Models\User;
use App\Enums\OrderStatus;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_no')->index('order_invoice_no_index');
            $table->foreignIdFor(User::class, 'customer_id');
            $table->double('sub_total')->default(0);
            $table->double('total_discount')->default(0);
            $table->double('grand_total')->default(0);
            $table->string('note')->nullable();
            $table->string('payment_method')->nullable();
            $table->string('image')->nullable();
            $table->enum('order_type', ['listing', 'file', 'image'])->default('listing');
            $table->string('class')->nullable();
            $table->string('level')->nullable();
            $table->string('status')->default(OrderStatus::WAITINGQUOTATIONS());
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
