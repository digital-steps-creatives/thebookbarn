<?php

use App\Models\Affiliate;
use App\Models\Order;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ref_codes', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Affiliate::class)->nullable();
            $table->foreignIdFor(Order::class)->nullable();
            $table->string('ref_code')->unique()->nullable();
            $table->enum('status', ['used', 'not used']);
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
        Schema::dropIfExists('ref_codes');
    }
};
