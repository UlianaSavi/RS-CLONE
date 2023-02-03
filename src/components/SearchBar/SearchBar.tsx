import React from 'react';
import './SearchBar.scss';
import { SearchIcon } from '../../assets/icons/search-icon';
import { addSelected, removeSelected } from '../../hooks/search';

function SearchBar() {
  return (
    <div className="search" id="search">
      <div className="search__icon" id="searchSvg">
        <SearchIcon />
      </div>
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
