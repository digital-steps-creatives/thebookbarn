<?php

namespace App\Http\Controllers\Admin;

use App\Models\Book;
use Inertia\Inertia;
use App\Models\Subject;
use App\Models\ClassLevel;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use App\Http\Controllers\Controller;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;
use App\Http\Requests\StoreProductRequest;
use ProtoneMedia\LaravelQueryBuilderInertiaJs\InertiaTable;

class ProductController extends Controller
{
    public function listProducts()
    {
        $globalSearch = AllowedFilter::callback('global', function ($query, $value) {
            $query->where(function ($query) use ($value) {
                Collection::wrap($value)->each(function ($value) use ($query) {
                    $query
                        ->orWhere('name', 'LIKE', "%{$value}%")
                        ->orWhere('product_type', 'LIKE', "%{$value}%");
                });
            });
        });

        $products = QueryBuilder::for(Book::class)
            ->defaultSort('name')
            ->allowedSorts(['name', 'status'])
            ->allowedFilters(['name', 'status', $globalSearch])
            ->paginate()
            ->withQueryString();

        return Inertia::render('Admin/Products/Index',[
            'products' => $products
        ])->table(function (InertiaTable $table) {
            $table->withGlobalSearch();
            $table->withGlobalSearch('Search products ...');
            $table->column('name', 'Name');
            $table->column('product_type', 'Type');
            $table->column('subject_id', 'Subject');
            $table->column('class_level_id', 'Class/Grade');
            $table->column(
                key: 'featured_image',
                label: 'Image',
                canBeHidden: true,
                hidden: false,
                sortable: true,
                searchable: true
            );
            $table->column('status', 'Status');
            $table->column(label: 'Actions');
        });
    }

    public function createProduct()
    {   
        return Inertia::render('Admin/Products/Create', [
            'classes' =>  ClassLevel::all(),
            'subjects' => Subject::all()
        ]);
    }

    public function storeProduct(StoreProductRequest $request)
    {   
        if ($request->hasFile('featured_image')) {
            $image = $request->featured_image->hashName();
            $productName = '/images/products/'. $image;
            $request->featured_image->move(public_path('images/products/'), $image);
        }
        Book::create([
            'featured_image' => $productName,
            'name' => $request->name,
            'product_type' => $request->product_type,
            'subject_id' => $request->subject_id,
            'class_level_id' => $request->class_level_id,
            'category' => $request->category,
            'availability' => $request->availability,
            'status' => $request->status,
            'added_by' => auth()->guard('administrator')->user()->id
        ]);
        return redirect()->route('admin.manage.products')->with('success', 'Product Created successfully');
    }

    public function editProduct($product)
    {   
        $findProduct = Book::find($product);
        return Inertia::render('Admin/Products/Edit', [
            'product' =>  $findProduct->load('subject'),
            'classes' =>  ClassLevel::all(),
            'subjects' => Subject::all()
        ]);
    }

    public function updateProduct(Request $request, Book $product)
    {
        //dd($request->all());
        if ($request->hasFile('featured_image')) {
            $image = $request->featured_image->hashName();
            $productName = '/images/products/'. $image;
            $request->featured_image->move(public_path('images/products/'), $image);
        }

        $product->update([
            'featured_image' => $productName,
            'name' => $request->name,
            'product_type' => $request->product_type,
            'subject_id' => $request->subject_id,
            'class_level_id' => $request->class_level_id,
            'category' => $request->category,
            'availability' => $request->availability,
            'status' => $request->status,
        ]);
        return back()->with('success', 'Product Updated successfully');
    }
}
