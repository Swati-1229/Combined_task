import { useState, useContext, useMemo, useEffect } from "react";
import { ProductFilterContext } from "../../context/ProductFilterContext";
import Pagination from "./Pagination";
import Filters from "./Filters";
import SideBar from "../sidebar";

const ProductManagement = () => {
    const { search, category, price, page, setPage } =
        useContext(ProductFilterContext);

    const ITEMS_PER_PAGE = 4;
    const [products, setProducts] = useState(() => {
        const saved = localStorage.getItem("products");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    const [form, setForm] = useState({
        name: "",
        price: "",
        category: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm({ ...form, [name]: files ? files[0] : value });
    };

    const handleAdd = () => {
        if (!form.name || !form.price || !form.category || !form.image) {
            alert("Please fill all fields");
            return;
        }

        const newProduct = {
            id: Date.now(),
            name: form.name,
            price: Number(form.price),
            category: form.category,
            image: URL.createObjectURL(form.image),
        };

        setProducts((prev) => [newProduct, ...prev]);
        setForm({ name: "", price: "", category: "", image: null });
        setPage(1);
    };

    const handleDelete = (id) => {
        if (!window.confirm("Delete this product?")) return;
        setProducts(products.filter((p) => p.id !== id));
        setPage(1);
    };

    const filteredProducts = useMemo(() => {
        return products
            .filter((p) =>
                p.name.toLowerCase().includes(search.toLowerCase())
            )
            .filter((p) => (category === "All" ? true : p.category === category))
            .filter((p) => p.price <= price);
    }, [products, search, category, price]);

    const categories = useMemo(() => {
        const unique = products.map((p) => p.category);
        return ["All", ...new Set(unique)];
    }, [products]);

    const paginatedProducts = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;
        return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredProducts, page]);

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">
            {/* Sidebar */}


            {/* Main Content */}
            <div className="flex-1 p-6 space-y-6">
                {/* Add Product Form */}
                <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 flex flex-col sm:flex-row flex-wrap gap-3">
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Product Name"
                        className="border px-3 py-2 rounded w-full sm:w-[200px] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <input
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        placeholder="Price"
                        type="number"
                        className="border px-3 py-2 rounded w-full sm:w-[120px] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <input
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        placeholder="Category"
                        className="border px-3 py-2 rounded w-full sm:w-[150px] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <input
                        name="image"
                        type="file"
                        onChange={handleChange}
                        className="border px-3 py-2 rounded w-full sm:w-[200px] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <button
                        onClick={handleAdd}
                        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
                    >
                        Add Product
                    </button>
                </div>

                {/* Products Table */}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                        <Filters categories={categories} />
                    </div>

                    <div className="md:w-3/4 overflow-x-auto bg-white dark:bg-gray-800 shadow rounded-xl">
                        <table className="w-full min-w-[600px] text-left">
                            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                                <tr>
                                    <th className="p-3">Image</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Category</th>
                                    <th className="p-3">Price</th>
                                    <th className="p-3">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {paginatedProducts.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="p-6 text-center text-gray-400 dark:text-gray-300"
                                        >
                                            No products found
                                        </td>
                                    </tr>
                                ) : (
                                    paginatedProducts.map((p) => (
                                        <tr
                                            key={p.id}
                                            className="border-t border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                                        >
                                            <td className="p-3">
                                                <img
                                                    src={p.image}
                                                    alt={p.name}
                                                    className="w-16 h-16 object-cover rounded"
                                                />
                                            </td>
                                            <td className="p-3 text-gray-900 dark:text-gray-100">
                                                {p.name}
                                            </td>
                                            <td className="p-3 text-gray-900 dark:text-gray-100">
                                                {p.category}
                                            </td>
                                            <td className="p-3 font-semibold text-gray-900 dark:text-gray-100">
                                                ₹ {p.price}
                                            </td>
                                            <td className="p-3">
                                                <button
                                                    onClick={() => handleDelete(p.id)}
                                                    className="text-red-500 hover:underline"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <Pagination
                            totalItems={filteredProducts.length}
                            itemsPerPage={ITEMS_PER_PAGE}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductManagement;
