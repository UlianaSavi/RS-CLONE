import { useState } from 'react';
import SettingsMenu from '../SettingsMenu/SettingsMenu';
import SidebarContent from '../SidebarContent/SidebarContent';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import './Sidebar.scss';

function Sidebar() {
  const [isActivePopup, setActivePopup] = useState(false);
  function flipFlop() {
    setActivePopup(!isActivePopup);
  }
  return (
    <div className="sidebar">
      <SidebarHeader callback={() => flipFlop()} />
      <SidebarContent />
      <SettingsMenu isOpen={isActivePopup} onClose={() => setActivePopup(false)} />
    </div>
  );
}

export default Sidebar;
