import { useState } from 'react';
import CreateButton from '../CreateButton/CreateButton';
import CreatePopup from '../CreatePopup/CreatePopup';
import SettingsSidebar from '../ForSettingsSidebar/SettingsSidebar';
import SettingsMenu from '../SettingsPopap/SettingsPopap';
import SidebarContent from '../SidebarContent/SidebarContent';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import './Sidebar.scss';

function Sidebar() {
  const [isActivePopup, setActivePopup] = useState(false);
  const [isActiveCreatePopup, setActiveCreatePopup] = useState(false);
  const [isSettings, setSettings] = useState(false);
  const [isSearchMode, setSearchMode] = useState(false);

  function flipFlop() {
    setActivePopup(!isActivePopup);
  }

  function changeSidebar() {
    if (isSettings) {
      setActivePopup(false);
      setSettings(false);
    } else {
      setSettings(true);
    }
  }

  const toggleCreatePopup = () => setActiveCreatePopup(!isActiveCreatePopup);
  const closeCreatePopup = () => setActiveCreatePopup(false);

  return (
    <div className="sidebar">
      {
        isSettings ? <SettingsSidebar onSidebarChange={() => changeSidebar()} />
          : (
            <>
              <SidebarHeader callback={() => flipFlop()} />
              <SidebarContent />
              <CreateButton
                isVisible={!isSearchMode}
                handleClick={toggleCreatePopup}
              />
              <CreatePopup
                isVisible={isActiveCreatePopup}
                closePopup={closeCreatePopup}
                setSearchMode={setSearchMode}
              />
              <SettingsMenu
                isOpen={isActivePopup}
                onClose={() => setActivePopup(false)}
                onSidebarChange={() => changeSidebar()}
              />
            </>
          )
      }
    </div>
  );
}

export default Sidebar;
