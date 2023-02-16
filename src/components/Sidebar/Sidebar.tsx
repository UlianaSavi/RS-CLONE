import { useState, useContext, useEffect } from 'react';
import { ActiveChatContext } from '../../context/ActiveChatContext';
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
  const { activeChatID } = useContext(ActiveChatContext);
  const [isVisibleSidebar, setVisibilitySidebar] = useState(!(window.innerWidth <= 920
    && activeChatID));

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

  useEffect(() => setVisibilitySidebar(!(window.innerWidth <= 920
    && activeChatID)), [activeChatID]);

  function changeVisibility() {
    if (window.innerWidth <= 920 && activeChatID) {
      setVisibilitySidebar(false);
    } else {
      setVisibilitySidebar(true);
    }
  }

  window.addEventListener('resize', () => changeVisibility());

  const toggleCreatePopup = () => setActiveCreatePopup(!isActiveCreatePopup);
  const closeCreatePopup = () => setActiveCreatePopup(false);

  return (
    <div className={isVisibleSidebar ? 'sidebar' : 'hide'}>
      {
        isSettings ? <SettingsSidebar onSidebarChange={() => changeSidebar()} />
          : (
            <>
              <SidebarHeader
                callback={() => flipFlop()}
                isSearchMode={isSearchMode}
                setSearchMode={setSearchMode}
              />
              <SidebarContent
                isSearchMode={isSearchMode}
                setSearchMode={setSearchMode}
              />
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
