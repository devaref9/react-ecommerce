import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

const formDefaultInputs = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(formDefaultInputs);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="SignInForm">
      <h2 className="SignInForm__heading">Already have an account?</h2>
      <span className="SignInForm__title">
        Sign up with your email and password
      </span>
      <form className="SignInForm__form" onSubmit={handleSubmit}>
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
        <Button buttonType="sign-up" type="submit">
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
