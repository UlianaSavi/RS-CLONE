import BurgerButton from '../BurgerButton/BurgerButton';
import SearchBar from '../SearchBar/SearchBar';
import SidebarCloseButton from '../SidebarCloseButton/SidebarCloseButton';
import './SidebarHeader.scss';

interface SidebarHeaderProps {
  isSearchMode: boolean,
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>,
  callback: () => void,
}

function SidebarHeader({ isSearchMode, callback, setSearchMode }: SidebarHeaderProps) {
  const closeSearch = () => setSearchMode(false);

  return (
    <div className="sidebar-header">
      {isSearchMode
        ? <SidebarCloseButton handleClick={closeSearch} />
        : <BurgerButton callback={callback} />}
      <SearchBar />
    </div>
  );
}

export default SidebarHeader;
