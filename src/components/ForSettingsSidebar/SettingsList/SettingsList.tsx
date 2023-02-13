import {
  LockIcon, DatatIcon, NoticeIcon, GearWheelIcon,
  FoldersIcon, DevicesIcon, LaungageIcon,
} from '../../../assets/icons/icons';
import PopupMenuItem from '../../PopupMenuItem/PopupMenuItem';
import './SettingsList.scss';

function SettingsList() {
  return (
    <div className="settings-list">
      <div className="settings-list__item">
        <PopupMenuItem label="Notifications and Sounds" icon={<NoticeIcon />} />
      </div>
      <div className="settings-list__item">
        <PopupMenuItem label="Data and Storage" icon={<DatatIcon />} />
      </div>
      <div className="settings-list__item">
        <PopupMenuItem label="Privacy and Security" icon={<LockIcon />} />
      </div>
      <div className="settings-list__item">
        <PopupMenuItem label="General Settings" icon={<GearWheelIcon />} />
      </div>
      <div className="settings-list__item">
        <PopupMenuItem label="Chat Folders" icon={<FoldersIcon />} />
      </div>
      <div className="settings-list__item">
        <PopupMenuItem label="Devices" icon={<DevicesIcon />} title="1" />
      </div>
      <div className="settings-list__item">
        <PopupMenuItem label="Language" icon={<LaungageIcon />} title="English" />
      </div>
    </div>
  );
}

export default SettingsList;
