<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{

    private $products = [
        ['id' => 1, 'name' => 'Laptop', 
       'description' => 'High-performance laptop',
       'price' => 1500, 'img'=> '/image/notebook.png'],
        ['id' => 2, 'name' => 'PC', 
       'description' => 'Latest smartphone with great features', 
       'price' => 800,'img'=> '/image/PC.webp'],
        ['id' => 3, 'name' => 'PC', 
       'description' => 'Portable tablet for everyday use', 
       'price' => 500,'img'=> '/image/PC1.png'],
       ['id' => 4, 'name' => 'PC', 
       'description' => 'High-performance laptop',
       'price' => 1000,'img'=> '/image/PC2.png'],
       ['id' => 5, 'name' => 'Laptop', 
       'description' => 'High-performance laptop',
       'price' => 1550,'img'=> '/image/notebook1.jpg'],
       ['id' => 6, 'name' => 'Laptop', 
       'description' => 'High-performance laptop',
       'price' => 1600,'img'=> '/image/notebook2.png'],
       ['id' => 7, 'name' => 'Phone', 
       'description' => 'High-performance laptop',
       'price' => 1250,'img'=> '/image/iPhone.png'],
       ['id' => 8, 'name' => 'Phone', 
       'description' => 'High-performance laptop',
       'price' => 1060,'img'=> '/image/iPhone1.png'],
       ['id' => 9, 'name' => 'Monitor', 
       'description' => 'High-performance laptop',
       'price' => 1650,'img'=> '/image/mo.webp'],
       ['id' => 10, 'name' => 'Monitor', 
       'description' => 'High-performance laptop',
       'price' => 1430,'img'=>'/image/mo1.png'],
       ['id' => 11, 'name' => 'Monitor', 
       'description' => 'High-performance laptop',
       'price' => 1400,'img'=>'/image/mo2.png'],
       ['id' => 12, 'name' => 'Router', 
       'description' => 'High-performance laptop',
       'price' => 1111,'img'=>'/image/router.png'],
       ['id' => 13, 'name' => 'Router', 
       'description' => 'High-performance laptop',
       'price' => 1454,'img'=>'/image/touter1.png'],
        ];
        
   
    public function index()
    {
        return Inertia::render('Products/index',['products'=>$this->products]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(string $id)
    {
        $product = collect($this->products)->firstWhere('id', $id);
        if (!$product) {
        abort(404, 'Product not found');
        }
        return Inertia::render('Products/show', ['product' => $product]);
    }   

    public function edit(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }
}
