import React from "react";
import BrandsCategory from "../BrandsCategory/BrandsCategory";
import ViewAll from "../ViewAll/ViewAll";
import ProductCard from "../ProductCard/ProductCard";

const Shop = () => {
  return (
    <div className="Shop">
      <BrandsCategory />
      <div className="Shop__content">
        <div className="Shop__heading">
          <h2 className="Shop__title">Mobile Phone</h2>
          <ViewAll />
        </div>
        <div className="Shop__products-container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Shop;
