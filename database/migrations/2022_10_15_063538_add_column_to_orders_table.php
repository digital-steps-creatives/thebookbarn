<?php

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
        Schema::table('orders', function (Blueprint $table) {
            $table->text('address')
                    ->after('status')
                    ->nullable();
            $table->boolean('is_invoice')->default(0);
            $table->enum('delivery_type', ['home', 'school', 'pickup'])->nullable();
            $table->boolean('is_delivered')->default(0);
            $table->integer('output_status')->nullable()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('address');
            $table->dropColumn('is_invoice');
            $table->dropColumn('delivery_type');
            $table->dropColumn('is_delivered');
            $table->dropColumn('output_status');
        });
    }
};
