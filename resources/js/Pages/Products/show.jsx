import { Link } from "@inertiajs/react";

export default function Show({ product }) {
    return (
        <div className="bg-gray-200 min-h-screen py-10">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* รูปภาพสินค้า */}
                    <div className="p-4">
                        <img
                            src={product.img}
                            alt={product.name}
                            className="h-80 w-full object-cover rounded-md"
                        />
                    </div>

                    {/* ข้อมูลสินค้า */}
                    <div className="p-6">
                        <h1 className="text-2xl font-bold text-gray-900">
                            {product.name}
                        </h1>
                        <p className="mt-4 text-gray-700">{product.description}</p>
                        <p className="mt-6 text-xl font-semibold text-blue-600">
                            Price: ${product.price}
                        </p>
                        {/* ปุ่มย้อนกลับ */}
                        <div className="mt-8">
                            <Link
                                href="/products"
                                className="inline-block bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-red-500 transition duration-300"
                            >
                                Back to All Products
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
