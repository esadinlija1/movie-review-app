import React from "react";
import SearchBar from "../searchBar/SearchBar";
import Logo from "../logo/Logo";
import "./Header.css";

function Header({ onChangeQuery }) {
  return (
    <div className="header-container container">
      <Logo />
      <SearchBar onChangeQuery={onChangeQuery} />
    </div>
  );
}

export default Header;
