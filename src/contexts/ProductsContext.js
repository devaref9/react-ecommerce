import { useEffect } from "react";
import { createContext, useState } from "react";
import useFetch from "../customHooks/useFetch";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const { data, loading } = useFetch("https://api.storerestapi.com/products");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const value = { products, setProducts, loading };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
