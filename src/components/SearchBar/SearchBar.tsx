import './SearchBar.scss';
import { SearchIcon } from '../../assets/icons/icons';
import { addSelected, removeSelected } from '../../hooks/search';

function SearchBar() {
  return (
    <div className="search" id="search">
      <div className="search__icon" id="searchSvg">
        <SearchIcon />
      </div>
      <input
        className="search__input"
        onFocus={addSelected}
        onBlur={removeSelected}
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar;
