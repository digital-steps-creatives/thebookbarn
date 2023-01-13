<?php

use App\Models\Order;
use App\Models\Customer;
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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Order::class);
            $table->double('paid_amount',9,2) ->nullable();
            $table->double('balance',9,2)->nullable();
            $table->string('mpesa_account')->nullable();
            $table->string('mpesa_checkout_request_id')->nullable();
            $table->string('merchant_request_id')->nullable();
            $table->string('mpesa_code')->nullable();
            $table->string('BillRefNumber')->nullable();
            $table->string('invoice_number')->nullable();
            $table->string('trans_type')->nullable();
            $table->integer('status')->nullable();
            $table->foreignIdFor(Customer::class) ->nullable();
            $table->string('mpesa_status')->nullable();
            $table->text('mpesa_error_code')->nullable();
            $table->text('mpesa_call_back_object')->nullable();
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
        Schema::dropIfExists('payments');
    }
};
