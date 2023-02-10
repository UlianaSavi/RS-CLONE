import SettingsList from '../../components/ForSettingsPage/SettingsList/SettingsList';
import SettingsTopPanel from '../../components/ForSettingsPage/SettingsTopPanel/SettingsTopPanel';
import UserInfo from '../../components/ForSettingsPage/UserInfo/UserInfo';
import './SettingsPage.scss';

function SettingsPage() {
  return (
    <div className="setting">
      <SettingsTopPanel />
      <UserInfo />
      <SettingsList />
    </div>
  );
}

export default SettingsPage;
