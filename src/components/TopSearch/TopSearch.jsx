import React from "react";
import Logo from "../Svgs/Logo";
import SearchBox from "../SearchBox/SearchBox";
import { FaUserAlt, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopSearch = () => {
  return (
    <div className="TopSearch">
      <Link className="TopSearch__logo" to="/">
        <Logo />
      </Link>
      <SearchBox />
      <div className="TopSearch__user">
        <Link className="TopSearch__profile circle-icon" to="/">
          <FaUserAlt />
        </Link>
        <Link className="TopSearch__checkout circle-icon" to="/checkout">
          <FaShoppingBag />
          <span className="TopSearch__checkout-count circle-icon"></span>
        </Link>
      </div>
    </div>
  );
};

export default TopSearch;
