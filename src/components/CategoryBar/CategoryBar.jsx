import React from "react";
import { FaAngleRight } from "react-icons/fa";

const CategoryBar = () => {
  return (
    <div className="CategoryBar">
      <div className="CategoryBar__heading">
        <span className="CategoryBar__title">Categories</span>
        <span className="CategoryBar__angle">
          <FaAngleRight />
        </span>
      </div>
      <ul className="CategoryBar__list">
        <li>Fashion</li>
        <li>Electronic</li>
        <li>Cars</li>
        <li>Home & Garden</li>
      </ul>
    </div>
  );
};

export default CategoryBar;
