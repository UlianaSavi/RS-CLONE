import React from 'react';
import SidebarContent from '../SidebarContent/SidebarContent';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import './Sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarContent />
    </div>
  );
}

export default Sidebar;
