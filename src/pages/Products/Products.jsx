import React from "react";
import { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductsContext } from "../../contexts/ProductsContext";

const Products = () => {
  const { products, loading } = useContext(ProductsContext);
  return (
    <div className="Products">
      <div className="container">
        <div className="Products__inner">
          {products &&
            products.map((product) => {
              return (
                <ProductCard
                  price={product.price}
                  title={product.title}
                  key={product._id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;
