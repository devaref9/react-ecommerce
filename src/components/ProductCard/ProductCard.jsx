import React, { useState } from "react";
import {
  FaRegHeart,
  FaPlus,
  FaMinus,
  FaRegStar,
  FaTrash,
} from "react-icons/fa";
import Button from "../Button/Button";

const ProductCard = () => {
  const [canRemove, setCanRemove] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className="ProductCard">
      <img src="/assets/flash-3.png" alt="" />
      <div className="ProductCard__desc">
        <h4 className="ProductCard__name">Phone</h4>
        <div className="ProductCard__rating">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <h4 className="ProductCard__price">$100.00</h4>

        <span className="ProductCard__discount">50% off</span>
        <span className="ProductCard__add-to-favourite">
          <FaRegHeart />
        </span>
        {isAdded ? (
          <div className="ProductCard__add-to-cart">
            <>
              {canRemove ? (
                <Button className="ProductCard__remove-icon">
                  <FaTrash />
                </Button>
              ) : (
                <Button className="ProductCard__decrease-icon">
                  <FaMinus />
                </Button>
              )}
              <span className="ProductCard__count">0</span>
              <Button className="ProductCard__increase-icon">
                <FaPlus />
              </Button>
            </>
          </div>
        ) : (
          <Button className="ProductCard__add-button">Add To cart</Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
