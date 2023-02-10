import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import { SettingsIcon } from '../../assets/icons/icons';
import './SettingsPopap.scss';

function SettingsMenu(props: { isOpen: boolean, onClose: () => void,
  onSidebarChange: () => void }) {
  const { isOpen, onClose, onSidebarChange } = props;

  const click = () => null;

  return (
    <nav className={isOpen ? 'popup active' : 'popup'} id="popup" onMouseLeave={() => onClose()}>
      <PopupMenuItem label="Saved Messages" icon={<SettingsIcon />} handleClick={click} />
      <PopupMenuItem label="Settings" icon={<SettingsIcon />} handleClick={onSidebarChange} />
      <PopupMenuItem label="Log Out" icon={<SettingsIcon />} handleClick={click} />
    </nav>
  );
}

export default SettingsMenu;
