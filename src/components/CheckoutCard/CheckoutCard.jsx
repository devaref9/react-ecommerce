import React from "react";
import { FaPlus, FaMinus, FaRegTrashAlt } from "react-icons/fa";
import Button from "../Button/Button";

const CheckoutCard = () => {
  return (
    <div className="CheckoutCard">
      <div className="CheckoutCard__content">
        <img
          className="CheckoutCard__img"
          src="/assets/flash-3.png"
          alt="phone"
        />
        <div className="CheckoutCard__desc">
          <h2 className="CheckoutCard__name">Phone</h2>
          <div className="CheckoutCard__details">
            <span className="CheckoutCard__count">$100.00 * 1</span>
            <span className="CheckoutCard__total">$100.00</span>
          </div>
        </div>
      </div>
      <div className="CheckoutCard__buttons">
        <Button className="CheckoutCard__remove">
          <FaRegTrashAlt />
        </Button>
        <div className="CheckoutCard__number-icons">
          <Button className="CheckoutCard__increase">
            <FaPlus />
          </Button>
          <Button className="CheckoutCard__decrease">
            <FaMinus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
