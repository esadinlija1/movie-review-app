import { useState, useEffect } from "react";
import "./SearchBar.css";

export default function SearchBar({ onChangeQuery }) {
  const handleChange = (e) => {
    onChangeQuery(e.target.value);
  };

  return (
    <div className="search-container">
      <div className="icon-holder">
        <img src="/search_icon.svg" alt="search-icon" />
      </div>
      <input type="text" placeholder="Search movies" onChange={handleChange} />
    </div>
  );
}
