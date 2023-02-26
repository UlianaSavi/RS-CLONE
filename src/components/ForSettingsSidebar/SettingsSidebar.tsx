import { useState } from 'react';
import SettingsList from './SettingsList/SettingsList';
import SettingsTopPanel from './SettingsHeader/SettingsHeader';
import UserInfo from './UserInfo/UserInfo';
import EditProfileBlock from '../ForEditProfile/EditProfileBlock';
import RsSchoolLinks from '../RsSchoolLinks/RsSchoolLinks';
import './SettingsSidebar.scss';

function SettingsSidebar(props: { onSidebarChange: () => void }) {
  const { onSidebarChange } = props;
  const [isEditProfile, setEditProfile] = useState(false);

  function changeSettings() {
    if (isEditProfile) {
      setEditProfile(false);
    } else {
      setEditProfile(true);
    }
  }

  return (
    isEditProfile ? <EditProfileBlock handleEditClick={() => changeSettings()} /> : (
      <div className="setting">
        <SettingsTopPanel handleClick={onSidebarChange} handleEditClick={() => changeSettings()} />
        <UserInfo />
        <SettingsList />
        <RsSchoolLinks />
      </div>
    )
  );
}

export default SettingsSidebar;
