import BurgerButton from '../BurgerButton/BurgerButton';
import SearchBar from '../SearchBar/SearchBar';
import './SidebarHeader.scss';

function SidebarHeader(props: {callback: () => void}) {
  const { callback } = props;
  return (
    <div className="sidebar-header">
      <BurgerButton callback={callback} />
      <SearchBar />
    </div>
  );
}

export default SidebarHeader;
