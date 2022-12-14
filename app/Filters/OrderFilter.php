<?php

namespace App\Filters;

class OrderFilter extends Filter
{
    /**
     * Related Models that have ModelFilters as well as the method on the ModelFilter
     * As [relationMethod => [input_key1, input_key2]].
     *
     * @var array
     */
    public $searchRelations = [
        "customer" => ['name']
    ];

    /**
     * Searchable columns of the table
     *
     * @var array
     */
    public $searchColumns = ['invoice_no', 'created_at', 'status'];

    /**
     * Filter by status
     */
    public function status($value)
    {
        $this->where('status', $value);
    }
}
