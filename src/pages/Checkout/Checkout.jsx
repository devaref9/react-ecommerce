import React from "react";
import CheckoutCard from "../../components/CheckoutCard/CheckoutCard";

const Checkout = () => {
  return (
    <div className="Checkout container">
      <div className="Checkout__details">
        <h3 className="Checkout__empty">Cart is empty</h3>
        <div className="Checkout__list">
          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
        </div>
      </div>
      <div className="Checkout__summary">
        <h3 className="Checkout__heading">Cast Summary</h3>
        <div className="Checkout__total-price">
          <span className="Checkout__title">Total Price :</span>
          <span className="Checkout__price">$0.00</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
