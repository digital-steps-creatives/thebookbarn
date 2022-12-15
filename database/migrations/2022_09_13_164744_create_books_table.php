<?php

use App\Models\ClassLevel;
use App\Models\Subject;
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
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignIdFor(Subject::class)->nullable();
            $table->foreignIdFor(ClassLevel::class)->nullable();
            $table->enum('availability', ['true', 'false'])->nullable();
            $table->foreignIdFor(User::class, 'added_by');
            $table->enum('status', ['true', 'false'])->default('true');
            $table->string('featured_image');
            $table->enum('product_type', ['book', 'stationary', 'uniform'])->nullable();
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
        Schema::dropIfExists('books');
    }
};
