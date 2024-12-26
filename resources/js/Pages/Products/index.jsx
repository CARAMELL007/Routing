import { Link } from "@inertiajs/react"; 

export default function Index({ products }) {
    return (
        <>
            {/* หัวข้อหลัก */}
            <h1 className="text-3xl font-extrabold flex flex-col items-center tracking-tight text-green-900 mb-8">
                Product IT
            </h1>

            {/* ส่วนพื้นหลัง */}
            <div className="bg-gray-200 py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* หัวข้อ */}
                    <h2 className="text-2xl font-bold tracking-tight text-green-900 mb-6">
                        Customers also purchased
                    </h2>

                    {/* gridที่แสดงรายการสินค้า */}
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="group relative bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                            >
                                {/* รูปภาพสินค้า */}
                                <img
                                    alt={product.name}
                                    src={product.img}
                                    className="h-60 w-full rounded-t-lg object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {/* ข้อมูลสินค้า */}
                                <div className="p-4">
                                    {/* ชื่อสินค้า */}
                                    <h3 className="text-lg font-medium text-gray-900">
                                        <Link href={`/products/${product.id}`}>
                                            {product.name}
                                        </Link>
                                    </h3>
                                    {/* ราคาสินค้า */}
                                    <p className="mt-2 text-sm font-medium text-gray-700">
                                        {product.price} ฿
                                    </p>
                                    {/* ปุ่มดูรายละเอียด */}
                                    <div className="mt-4">
                                        <Link
                                            href={`/products/${product.id}`}
                                            className="inline-block w-full text-center bg-blue-500 text-white text-sm font-semibold py-2 rounded-md hover:bg-red-500 transition duration-300"
                                        >
                                            ดูรายละเอียด
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

