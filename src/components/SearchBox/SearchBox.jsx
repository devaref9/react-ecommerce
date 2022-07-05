import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className="SearchBox">
      <button type="submit" className="SearchBox__submit">
        <FaSearch />
      </button>
      <input type="text" className="SearchBox__input" />
      <select className="SearchBox__filter" name="filter">
        <option className="SearchBox__category" value="all">
          All Category
        </option>
        <option className="SearchBox__category" value="fashion">
          Fashion
        </option>
        <option className="SearchBox__category" value="cars">
          Cars
        </option>
      </select>
    </form>
  );
};

export default SearchInput;
