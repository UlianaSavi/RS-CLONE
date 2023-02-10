import SettingsList from './SettingsList/SettingsList';
import SettingsTopPanel from './SettingsTopPanel/SettingsHeader';
import UserInfo from './UserInfo/UserInfo';
import './SettingsSidebar.scss';

function SettingsSidebar(props: { onSidebarChange: () => void }) {
  const { onSidebarChange } = props;

  return (
    <div className="setting">
      <SettingsTopPanel handleClick={onSidebarChange} />
      <UserInfo />
      <SettingsList />
    </div>
  );
}

export default SettingsSidebar;
