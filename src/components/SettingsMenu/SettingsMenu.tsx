import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import { SettingsIcon } from '../../assets/icons/icons';
import './SettingsMenu.scss';

function SettingsMenu(props: { isOpen: boolean, onClose: () => void }) {
  const { isOpen, onClose } = props;

  const click = () => null;

  return (
    <nav className={isOpen ? 'popup active' : 'popup'} id="popup" onMouseLeave={() => onClose()}>
      <PopupMenuItem label="Saved Messages" icon={<SettingsIcon />} handleClick={click} />
      <PopupMenuItem label="Settings" icon={<SettingsIcon />} handleClick={click} />
      <PopupMenuItem label="Log Out" icon={<SettingsIcon />} handleClick={click} />
    </nav>
  );
}

export default SettingsMenu;
