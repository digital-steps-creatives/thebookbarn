<?php

namespace App\Models;

use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Book extends Model implements Searchable
{
    use HasFactory;

    protected $with=['subject', 'classlevel'];
    protected $fillable = [
        'category',
        'name',
        'availability',
        'status',
        'featured_image',
        'product_type',
        'class_level_id',
        'subject_id',
        'added_by'
    ];

    public function subject():BelongsTo
    {
        return $this->belongsTo(Subject::class);
    }

    public function classlevel():BelongsTo
    {
        return $this->belongsTo(ClassLevel::class, 'class_level_id');
    }

    public function getSearchResult(): SearchResult
    {
    //    $url = route('members.show', $this->id);
         
       return new SearchResult($this, $this->name, '#');
    }
}
