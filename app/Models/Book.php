<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Book extends Model
{
    use HasFactory;

    public function subject():BelongsTo
    {
        return $this->belongsTo(Subject::class);
    }

    public function classlevel():BelongsTo
    {
        return $this->belongsTo(ClassLevel::class, 'class_level_id');
    }
}
