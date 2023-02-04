import { SettingsIcon } from '../../assets/icons/icons';
import './SettingsMenuItem.scss';

function SettingsMenuItem() {
  return (
    <div className="popap-item-wrapper">
      <SettingsIcon />
      <span>Settings</span>
    </div>
  );
}

export default SettingsMenuItem;
