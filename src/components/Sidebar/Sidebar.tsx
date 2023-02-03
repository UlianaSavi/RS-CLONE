import SettingsMenu from '../SettingsMenu/SettingsMenu';
import SidebarContent from '../SidebarContent/SidebarContent';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import './Sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarContent />
      <SettingsMenu />
    </div>
  );
}

export default Sidebar;
