import { logOut } from '../../../API/api';
import { ArrowLeftIcon, EditIcon, LogOutIcon } from '../../../assets/icons/icons';
import './SettingsHeader.scss';
import { SettingsHeaderProps } from '../../../types';

function SettingsHeader({ handleClick, handleEditClick }: SettingsHeaderProps) {
  return (
    <div className="settings-header">
      <button type="button" className="settings-header__close-button" onClick={handleClick}>
        <ArrowLeftIcon />
      </button>
      <div className="settings-header__title"><span>Settings</span></div>
      <button type="button" className="settings-header__edit-button" onClick={handleEditClick}>
        <EditIcon />
      </button>
      <button type="button" className="settings-header__logout-button" onClick={logOut} data-title="LogOut">
        <LogOutIcon />
      </button>
    </div>
  );
}

export default SettingsHeader;
