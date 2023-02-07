/* eslint-disable no-undef */
import { useState } from 'react';
import CreateButton from '../CreateButton/CreateButton';
import SettingsMenu from '../SettingsMenu/SettingsMenu';
import SidebarContent from '../SidebarContent/SidebarContent';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import './Sidebar.scss';

interface SidebarProps {
  activeChatId: number,
  setActiveChatId: React.Dispatch<React.SetStateAction<number>>
}

function Sidebar({ activeChatId, setActiveChatId }: SidebarProps) {
  const [isActivePopup, setActivePopup] = useState(false);
  function flipFlop() {
    setActivePopup(!isActivePopup);
  }
  return (
    <div className="sidebar">
      <SidebarHeader callback={() => flipFlop()} />
      <SidebarContent
        activeChatId={activeChatId}
        setActiveChatId={setActiveChatId}
      />
      <CreateButton />
      <SettingsMenu
        isOpen={isActivePopup}
        onClose={() => setActivePopup(false)}
      />
    </div>
  );
}

export default Sidebar;
