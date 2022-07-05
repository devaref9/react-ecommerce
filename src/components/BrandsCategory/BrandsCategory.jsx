import React from "react";
import { FaApple } from "react-icons/fa";
import Button from "../Button/Button";

const BrandsCategory = () => {
  return (
    <div className="BrandsCategory">
      <div className="BrandsCategory__inner">
        <h3 className="BrandsCategory__heading">Brands</h3>
        <ul className="BrandsCategory__list">
          <li className="BrandsCategory__item">
            <span className="BrandsCategory__logo">
              <FaApple />
            </span>
            <span className="BrandsCategory__name">Apple</span>
          </li>
          <li className="BrandsCategory__item">
            <span className="BrandsCategory__logo">
              <FaApple />
            </span>
            <span className="BrandsCategory__name">Apple</span>
          </li>
          <li className="BrandsCategory__item">
            <span className="BrandsCategory__logo">
              <FaApple />
            </span>
            <span className="BrandsCategory__name">Apple</span>
          </li>
          <li className="BrandsCategory__item">
            <span className="BrandsCategory__logo">
              <FaApple />
            </span>
            <span className="BrandsCategory__name">Apple</span>
          </li>
        </ul>
      </div>
      <div className="BrandsCategory__view-all">
        <Button className="BrandsCategory__btn">View All Brands</Button>
      </div>
    </div>
  );
};

export default BrandsCategory;
