import React from 'react';
import { FaSearch, FaSlidersH } from 'react-icons/fa';
import './SearchBar.css'; // Import the CSS file for styling

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        {/* Search Icon Button */}
        <button className="search-button">
          <FaSearch />
        </button>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Explore"
          aria-label="Explore"
          className="search-input"
        />

        {/* Filter Icon Button */}
        <button className="filter-button">
          <FaSlidersH />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
