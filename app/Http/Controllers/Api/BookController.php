<?php
namespace App\Http\Controllers\Api;

use App\Models\Book;
use App\Http\Controllers\Api\BaseController;

class BookController extends BaseController
{
    public function getBooks()
    {
        $success['listBooks'] = Book::with('subject', 'classlevel')->where('availability', 1)->where('status', 1)->paginate();

        return $this->sendResponse($success, 'successfully loaded');
    }
}
