<?php

namespace Database\Factories;

use App\Models\ClassLevel;
use App\Models\Subject;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->name(),
            'availability' => 1,
            'status' => 1,
            'subject_id' => Subject::factory(),
            'class_level_id' => ClassLevel::factory(),
            'added_by' =>1,
            'featured_image' => fake()->imageUrl(640,980),
            'product_type' => 'book'
        ];
    }
}
