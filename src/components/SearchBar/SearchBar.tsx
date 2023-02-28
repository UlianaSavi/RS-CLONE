import { useState } from 'react';
import { SearchIcon } from '../../assets/icons/icons';
import './SearchBar.scss';

interface SearchBarProps {
  isSearchMode: boolean,
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>,
  searchInput: string,
  setSearchInput: React.Dispatch<React.SetStateAction<string>>,
}

function SearchBar({
  isSearchMode, setSearchMode, searchInput, setSearchInput,
}: SearchBarProps) {
  const [isInFocus, setFocus] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleFocus = () => {
    setFocus(true);
    setSearchMode(true);
  };

  const handleBlur = () => {
    setSearchInput('');
    setFocus(false);
  };

  return (
    <div className={`search ${isSearchMode && isInFocus ? 'selected' : ''}`} id="search">
      <div className="search__icon" id="searchSvg">
        <SearchIcon />
      </div>
      <input
        className="search__input"
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
