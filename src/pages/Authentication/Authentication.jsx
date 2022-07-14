import React from "react";
import SignInForm from "../../components/SignIn/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const Authentication = () => {
  return (
    <div className="Authentication">
      <div className="container">
        <div className="Authentication__inner">
          <SignInForm />
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
