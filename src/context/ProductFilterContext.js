import { createContext, useState } from "react";

export const ProductFilterContext = createContext();

export const ProductFilterProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [price, setPrice] = useState(100000);
    const [page, setPage] = useState(1);

    return (
        <ProductFilterContext.Provider
            value={{
                search,
                setSearch,
                category,
                setCategory,
                price,
                setPrice,
                page,
                setPage,
            }}
        >
            {children}
        </ProductFilterContext.Provider>
    );
};
