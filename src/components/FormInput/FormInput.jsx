import React from "react";

const FormInput = ({ label, value, ...othersProps }) => {
  return (
    <div className="FormInput">
    <input className="FormInput__input" {...othersProps} />
      {label && (
        <label className={`FormInput__label ${value ? "shrink" : ""}`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
