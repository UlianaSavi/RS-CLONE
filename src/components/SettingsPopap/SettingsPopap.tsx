import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import { ReactComponent as SavedMessIcon } from '../../assets/icons/bookmark.svg';
import { ReactComponent as SettingIcon } from '../../assets/icons/setting-icon.svg';
import './SettingsPopap.scss';

function SettingsMenu(props: { isOpen: boolean, onClose: () => void,
  onSidebarChange: () => void }) {
  const { isOpen, onClose, onSidebarChange } = props;

  const click = () => null;

  return (
    <nav className={isOpen ? 'popup active' : 'popup'} id="popup" onMouseLeave={() => onClose()}>
      <PopupMenuItem label="Saved Messages" icon={<SavedMessIcon />} handleClick={click} />
      <PopupMenuItem label="Settings" icon={<SettingIcon />} handleClick={onSidebarChange} />
    </nav>
  );
}

export default SettingsMenu;
