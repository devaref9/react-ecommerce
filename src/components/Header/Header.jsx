import React from "react";
import NavBar from "../NavBar/NavBar";
import TopSearch from "../TopSearch/TopSearch";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__inner container">
        <TopSearch />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
