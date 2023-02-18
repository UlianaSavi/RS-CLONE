import BurgerButton from '../BurgerButton/BurgerButton';
import SearchBar from '../SearchBar/SearchBar';
import SidebarCloseButton from '../SidebarCloseButton/SidebarCloseButton';
import './SidebarHeader.scss';

interface SidebarHeaderProps {
  isSearchMode: boolean,
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>,
  searchInput: string,
  setSearchInput: React.Dispatch<React.SetStateAction<string>>,
  callback: () => void,
}

function SidebarHeader({
  isSearchMode, callback, setSearchMode, searchInput, setSearchInput,
}: SidebarHeaderProps) {
  const closeSearch = () => setSearchMode(false);

  return (
    <div className="sidebar-header">
      {isSearchMode
        ? <SidebarCloseButton handleClick={closeSearch} />
        : <BurgerButton callback={callback} />}
      <SearchBar
        isSearchMode={isSearchMode}
        setSearchMode={setSearchMode}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
    </div>
  );
}

export default SidebarHeader;
