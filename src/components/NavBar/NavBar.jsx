import React from "react";
import CategoryBar from "../CategoryBar/CategoryBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <CategoryBar />
      <ul className="NavBar__menu">
        <li>
          <Link className="NavBar__link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="NavBar__link" to="/">
            Pages
          </Link>
        </li>
        <li>
          <Link className="NavBar__link" to="/">
            User Account
          </Link>
        </li>
        <li>
          <Link className="NavBar__link" to="/">
            Vendor Account
          </Link>
        </li>
        <li>
          <Link className="NavBar__link" to="/">
            Track My Order
          </Link>
        </li>
        <li>
          <Link className="NavBar__link" to="/">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
