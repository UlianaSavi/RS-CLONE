import BurgerButton from '../BurgerButton/BurgerButton';
import SearchBar from '../SearchBar/SearchBar';
import './SidebarHeader.scss';

function SidebarHeader() {
  return (
    <div className="sidebar-header">
      <BurgerButton />
      <SearchBar />
    </div>
  );
}

export default SidebarHeader;
