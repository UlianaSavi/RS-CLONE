import React from 'react';
import './SearchBar.scss';
import { addSelected, removeSelected } from '../../hooks/search';

function SearchBar() {
  return (
    <div className="search" id="search">
      <img src="../../assets/icons/search-icon.svg" alt="Search icon" className="search__icon" />
      <input
        className="search__input"
        id="search__input"
        onFocus={addSelected}
        onBlur={removeSelected}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar;
