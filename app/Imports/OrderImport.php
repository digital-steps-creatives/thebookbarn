<?php

namespace App\Imports;

use App\Models\Book;
use Ramsey\Uuid\Uuid;
use App\Models\ListOrder;
use Illuminate\Support\Str;
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

        for ($i=0; $i < 2; $i++) { 
            $kitabu = $saveData['book'][{{ $i }}][key];
        }
        $mybook = new ListOrder();
        $mybook->book = $kitabu;
        $mybook->quantity = $saveData['quantity'];
        $mybook->customer_id = auth()->user()->id;
        $mybook->class = $saveData['class'];
        $mybook->level = $saveData['level'];
        $mybook->status = 'pending review';
        $mybook->order_number = $this->randN;

        $mybook->save();
        return;
    }
}
