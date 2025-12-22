import { useContext, useCallback } from "react";
import { ProductFilterContext } from "../../context/ProductFilterContext";
import { Search } from "lucide-react";

const SearchBar = () => {
    const { search, setSearch, setPage } = useContext(ProductFilterContext);

    const handleSearch = useCallback(
        (e) => {
            setSearch(e.target.value);
            setPage(1);
        },
        [setSearch, setPage]
    );

    return (
        <div className="relative w-full">
            <input
                type="text"
                value={search}
                placeholder="Search product..."
                onChange={handleSearch}
                className="w-full pl-4 pr-12 py-3 border rounded-lg"
            />
            <Search
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
        </div>
    );
};

export default SearchBar;
