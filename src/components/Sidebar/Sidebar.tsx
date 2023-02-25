import { useState, useContext } from 'react';
import CreateButton from '../CreateButton/CreateButton';
import CreatePopup from '../CreatePopup/CreatePopup';
import SettingsSidebar from '../ForSettingsSidebar/SettingsSidebar';
import SettingsMenu from '../SettingsPopap/SettingsPopap';
import SidebarContent from '../SidebarContent/SidebarContent';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import { AuthContext } from '../../context/AuthContext';
import { SelectedUsersContext } from '../../context/SelectedUsersContext';
import type { User } from '../../types';
import './Sidebar.scss';

function Sidebar(props: {sidebarClass: string}) {
  const [isActivePopup, setActivePopup] = useState(false);
  const [isActiveCreatePopup, setActiveCreatePopup] = useState(false);
  const [isSettings, setSettings] = useState(false);
  const [isSearchMode, setSearchMode] = useState(false);
  const [isGroupCreationMode, setGroupCreationMode] = useState(false);
  const { sidebarClass } = props;
  const [searchInput, setSearchInput] = useState('');
  const { selectedUsers, setSelectedUsers } = useContext(SelectedUsersContext);
  const currentUser: User = useContext(AuthContext) as User;

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

  const closeCreatePopup = () => setActiveCreatePopup(false);

  const handleCreateButton = () => {
    if (isGroupCreationMode) {
      setSelectedUsers([...selectedUsers, currentUser.uid]);
      setSettings(true);
    } else {
      setActiveCreatePopup(!isActiveCreatePopup);
    }
  };

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
                isSearchMode={isSearchMode}
                isGroupCreationMode={isGroupCreationMode}
                handleClick={handleCreateButton}
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
