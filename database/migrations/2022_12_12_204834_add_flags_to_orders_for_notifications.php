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
            $table->enum('notify_admin', ['true', 'false'])->default('false');
            $table->enum('notify_vendors', ['true', 'false'])->default('false');
            $table->enum('notify_customer_quote', ['true', 'false'])->default('false');
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
            $table->dropColumn('notify_admin');
            $table->dropColumn('notify_vendors');
            $table->dropColumn('notify_customer_quote');
        });
    }
};
