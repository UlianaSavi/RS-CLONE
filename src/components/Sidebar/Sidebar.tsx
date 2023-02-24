import { useState } from 'react';
import CreateButton from '../CreateButton/CreateButton';
import CreatePopup from '../CreatePopup/CreatePopup';
import SettingsSidebar from '../ForSettingsSidebar/SettingsSidebar';
import SettingsMenu from '../SettingsPopap/SettingsPopap';
import SidebarContent from '../SidebarContent/SidebarContent';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import './Sidebar.scss';

function Sidebar(props: {sidebarClass: string}) {
  const [isActivePopup, setActivePopup] = useState(false);
  const [isActiveCreatePopup, setActiveCreatePopup] = useState(false);
  const [isSettings, setSettings] = useState(false);
  const [isSearchMode, setSearchMode] = useState(false);
  const [isGroupCreationMode, setGroupCreationMode] = useState(false);
  const { sidebarClass } = props;
  const [searchInput, setSearchInput] = useState('');

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
    <div className={sidebarClass}>
      {
        isSettings ? <SettingsSidebar onSidebarChange={() => changeSidebar()} />
          : (
            <>
              <SidebarHeader
                callback={() => flipFlop()}
                isSearchMode={isSearchMode}
                setSearchMode={setSearchMode}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
              <SidebarContent
                isSearchMode={isSearchMode}
                setSearchMode={setSearchMode}
                searchInput={searchInput}
                isGroupCreationMode={isGroupCreationMode}
              />
              <CreateButton
                isVisible={!isSearchMode}
                handleClick={toggleCreatePopup}
              />
              <CreatePopup
                isVisible={isActiveCreatePopup}
                closePopup={closeCreatePopup}
                setSearchMode={setSearchMode}
                setGroupCreationMode={setGroupCreationMode}
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
