import React from "react";

const Button = ({ children, handleClick, className }) => {
  return (
    <button onClick={handleClick} className={`Btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
