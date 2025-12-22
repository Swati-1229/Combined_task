import { useContext } from "react";
import { ProductFilterContext } from "../../context/ProductFilterContext";

const Pagination = ({ totalItems, itemsPerPage }) => {
    const { page, setPage } = useContext(ProductFilterContext);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`px-3 py-1 rounded border
            ${page === i + 1
                            ? "bg-indigo-600 text-white"
                            : "bg-white hover:bg-gray-100"
                        }`}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
