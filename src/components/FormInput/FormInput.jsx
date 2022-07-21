import React from "react";

const FormInput = ({ label, value, ...otherProps }) => {
  return (
    <div className="FormInput">
      <input className="FormInput__input" {...otherProps} />
      {label && (
        <label className={`FormInput__label ${value ? "shrink" : ""}`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
