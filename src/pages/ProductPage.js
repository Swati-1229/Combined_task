import { useState } from "react";
import SearchBar from "../components/Products/SearchBar";
import ProductManagement from "../components/Products/ProductGrid";
import Pagination from "../components/Products/Pagination";
import SideBar from "../components/sidebar";

const ProductsPage = () => {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
            <SideBar />
            <main className="flex-1 p-6">
                <div className="max-w-7xl mx-auto flex flex-col gap-6">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 dark:text-gray-100">
                            Product Store
                        </h1>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 w-full">
                        <SearchBar />
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 w-full">
                        <ProductManagement />
                        <Pagination />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProductsPage;
