import SettingsList from './SettingsList/SettingsList';
import SettingsTopPanel from './SettingsTopPanel/SettingsHeader';
import UserInfo from './UserInfo/UserInfo';
import './SettingsSidebar.scss';

function SettingsSidebar() {
  return (
    <div className="setting">
      <SettingsTopPanel />
      <UserInfo />
      <SettingsList />
    </div>
  );
}

export default SettingsSidebar;
