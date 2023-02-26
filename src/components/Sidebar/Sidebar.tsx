import { useState, useContext } from 'react';
import CreateButton from '../CreateButton/CreateButton';
import CreatePopup from '../CreatePopup/CreatePopup';
import SettingsSidebar from '../ForSettingsSidebar/SettingsSidebar';
import SettingsMenu from '../SettingsPopap/SettingsPopap';
import SidebarContent from '../SidebarContent/SidebarContent';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import { AuthContext } from '../../context/AuthContext';
import { SelectedUsersContext } from '../../context/SelectedUsersContext';
import './Sidebar.scss';
import EditGroupInfo from '../EditGroupInfo/EditGroupInfo';
import { createNewGroup } from '../../API/api';

function Sidebar(props: {sidebarClass: string}) {
  const [isActivePopup, setActivePopup] = useState(false);
  const [isActiveCreatePopup, setActiveCreatePopup] = useState(false);
  const [isSettings, setSettings] = useState(false);
  const [isGroupInfo, setGroupInfo] = useState(false);
  const [isSearchMode, setSearchMode] = useState(false);
  const [isGroupCreationMode, setGroupCreationMode] = useState(false);
  const { sidebarClass } = props;
  const [searchInput, setSearchInput] = useState('');
  const { selectedUsers, setSelectedUsers } = useContext(SelectedUsersContext);
  const { currentUser } = useContext(AuthContext);
  const [groupName, setGroupName] = useState('');
  const [groupPhoto, setGroupPhoto] = useState('');

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

  const handleCreateButton = async () => {
    if (currentUser) {
      if (isGroupCreationMode && !isGroupInfo) {
        setSelectedUsers([...selectedUsers, currentUser.uid]);
        setGroupInfo(true);
      } else if (isGroupInfo) {
        await createNewGroup(selectedUsers, groupName, groupPhoto, currentUser.uid);
        setGroupInfo(false);
        setGroupCreationMode(false);
        setSearchMode(false);
        setSelectedUsers([]);
        setGroupName('');
        setGroupPhoto('');
      } else {
        setActiveCreatePopup(!isActiveCreatePopup);
      }
    }
  };

  const handleEditGroupInfoBackBtn = () => {
    setGroupInfo(false);
    setSelectedUsers([]);
    setGroupName('');
    setGroupPhoto('');
  };

  const closeSearch = () => {
    setSearchMode(false);
    setGroupCreationMode(false);
    setSelectedUsers([]);
  };

  let sidebarContent = null;
  if (isSettings) {
    sidebarContent = <SettingsSidebar onSidebarChange={() => changeSidebar()} />;
  } else if (isGroupInfo) {
    sidebarContent = (
      <>
        <EditGroupInfo
          groupName={groupName}
          setGroupName={setGroupName}
          groupPhoto={groupPhoto}
          setGroupPhoto={setGroupPhoto}
          handleBackClick={handleEditGroupInfoBackBtn}
        />
        <CreateButton
          isSearchMode={isSearchMode}
          isGroupCreationMode={isGroupCreationMode}
          isGroupInfo={isGroupInfo}
          handleClick={handleCreateButton}
          groupName={groupName}
        />
      </>
    );
  } else {
    sidebarContent = (
      <>
        <SidebarHeader
          callback={() => flipFlop()}
          isSearchMode={isSearchMode}
          setSearchMode={setSearchMode}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          closeSearch={closeSearch}
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
          isGroupInfo={isGroupInfo}
          handleClick={handleCreateButton}
          groupName={groupName}
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
    );
  }

  return (
    <div className={sidebarClass}>
      {sidebarContent}
    </div>
  );
}

export default Sidebar;
