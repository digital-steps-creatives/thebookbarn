<?php

use App\Models\User;
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
        Schema::create('book_shops', function (Blueprint $table) {
            $table->id();
            $table->string('business_name')->nullable();
            $table->foreignIdFor(User::class);
            $table->string('address')->nullable();
            $table->enum('type', ['limited', 'sole', 'unregistered'])->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('book_shops');
    }
};
