<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //\App\Models\Book::factory(100)->create();

        \App\Models\User::factory()->create([
            'name' => 'Julius Orayo',
            'email' => 'admin@bookbarn.school',
            'role' => 'super-admin',
            'password' => Hash::make('simpleL1fe')
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Fredrick Boaz',
            'email' => 'manager@bookbarn.school',
            'role' => 'administrator',
            'password' => Hash::make('simpleL1fe')
        ]);
        \App\Models\Subject::factory()->create([
            'name' => 'Science'
        ]);
        \App\Models\Subject::factory()->create([
            'name' => 'Mathematics'
        ]);
        \App\Models\Subject::factory()->create([
            'name' => 'Kiswahili'
        ]);
        \App\Models\Subject::factory()->create([
            'name' => 'Biology'
        ]);
        \App\Models\Subject::factory()->create([
            'name' => 'Physics'
        ]);
        \App\Models\Subject::factory()->create([
            'name' => 'CRE'
        ]);
        \App\Models\Subject::factory()->create([
            'name' => 'IRE'
        ]);
        \App\Models\Subject::factory()->create([
            'name' => 'Geography'
        ]);
        \App\Models\Subject::factory()->create([
            'name' => 'Chemistry'
        ]);
        \App\Models\Subject::factory()->create([
            'name' => 'English'
        ]);

        $classlevels = [
            [
                'class' => '8',
                'level' => 'primary'
            ],
            [
                'class' => 'Grade 7',
                'level' => 'primary'
            ],
            [
                'class' => 'Grade 6',
                'level' => 'primary'
            ],
            [
                'class' => 'Grade 5',
                'level' => 'primary'
            ],
            [
                'class' => 'Grade 4',
                'level' => 'primary'
            ],
            [
                'class' => 'Grade 3',
                'level' => 'primary'
            ],
            [
                'class' => 'Grade 2',
                'level' => 'primary'
            ],
            [
                'class' => 'Grade 1',
                'level' => 'primary'
            ],
            [
                'class' => 'Form 4',
                'level' => 'secondary'
            ],
            [
                'class' => 'Form 3',
                'level' => 'secondary'
            ],
            [
                'class' => 'Form 2',
                'level' => 'secondary'
            ],
            [
                'class' => 'Form 1',
                'level' => 'secondary'
            ]
        ];
        foreach ($classlevels as $level) {
            \App\Models\ClassLevel::create($level);
        }
    }
}
