import React from "react";

const BUTTON_TYPES = {
  add: "add-to-cart",
  "sign-up": "sign-up",
};

const Button = ({ children, handleClick, buttonType, ...otherProps }) => {
  return (
    <button
      onClick={handleClick}
      className={`Btn ${BUTTON_TYPES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
