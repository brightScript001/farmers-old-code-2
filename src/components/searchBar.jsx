import React from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/searchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input type="text" placeholder="Search..." className="search-input" />
    </div>
  );
};

export default SearchBar;
