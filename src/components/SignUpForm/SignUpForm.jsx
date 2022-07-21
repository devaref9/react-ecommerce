import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

const formDefaultInputs = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(formDefaultInputs);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormFields(formDefaultInputs);
    console.log("Form Submitted!");
  };
  return (
    <div className="SignUpForm">
      <h2 className="SignUpForm__heading">Don't have an account?</h2>
      <span className="SignUpForm__title">
        Sign up with your email and password
      </span>
      <form className="SignUpForm__form" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <Button buttonType="sign-up" type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
