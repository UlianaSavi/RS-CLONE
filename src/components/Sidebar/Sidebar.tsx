import React from 'react';
import Popap from '../SettingsMenu/SettingsMenu';
import SidebarContent from '../SidebarContent/SidebarContent';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import './Sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarContent />
      <Popap />
    </div>
  );
}

export default Sidebar;
