import { Link } from 'react-router-dom';
import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import { SettingsIcon } from '../../assets/icons/icons';
import './SettingsMenu.scss';

function SettingsMenu(props: { isOpen: boolean, onClose: () => void }) {
  const { isOpen, onClose } = props;

  const click = () => null;

  return (
    <nav className={isOpen ? 'popup active' : 'popup'} id="popup" onMouseLeave={() => onClose()}>
      <PopupMenuItem label="Saved Messages" icon={<SettingsIcon />} handleClick={click} />
      <Link to="/settings"><PopupMenuItem label="Settings" icon={<SettingsIcon />} /></Link>
      <PopupMenuItem label="Log Out" icon={<SettingsIcon />} handleClick={click} />
    </nav>
  );
}

export default SettingsMenu;
