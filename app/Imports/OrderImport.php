<?php

namespace App\Imports;

use App\Models\Book;
use App\Models\Order;
use Ramsey\Uuid\Uuid;
use App\Models\ListOrder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class OrderImport implements ToModel, WithHeadingRow
{
    public $randN;
    public function __construct(){
        $this->randN = Str::random(8);
    }
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {   
        // for ($i=0; $i <= 4; $i++) { 
        //     $row['book'][{{ $i }}][key]
        // }
       
        return $this->makeData($row);
    }

    public function makeData($saveData)
    {

        foreach ($saveData as $item) {
            dd($item);
           $data = [
            'books' =>  $item['book_name'],
            'quantity' => $item['quantity'],
            'customer_id' => auth()->user()->id,
            'class' => $item['class'],
            'level' => $item['level'],
            'order_type' => 'file'
           ];
           $resultArray[] = $data;
        }
        Log::info($resultArray);
        dd($resultArray);
        
    }
}
