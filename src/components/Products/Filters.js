import { useContext } from "react";
import { ProductFilterContext } from "../../context/ProductFilterContext";

const Filters = ({ categories = [] }) => {
    const { category, setCategory, price, setPrice, setPage } =
        useContext(ProductFilterContext);

    return (
        <div className="bg-white shadow rounded-xl p-4 space-y-6">
            <div>
                <label className="text-sm text-gray-600 block mb-1">
                    Category
                </label>
                <select
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                        setPage(1);
                    }}
                    className="border p-2 rounded w-full"
                >
                    {categories.length <= 1 ? (
                        <option>No categories</option>
                    ) : (
                        categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))
                    )}
                </select>
            </div>
            <div>
                <label className="text-sm text-gray-600 block mb-1">
                    Max Price: ₹ {price}
                </label>
                <input
                    type="range"
                    min="0"
                    max="100000"
                    step="500"
                    value={price}
                    onChange={(e) => {
                        setPrice(Number(e.target.value));
                        setPage(1);
                    }}
                    className="w-full"
                />
            </div>
        </div>
    );
};

export default Filters;
