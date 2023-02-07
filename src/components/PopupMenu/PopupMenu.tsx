import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import { SettingsIcon } from '../../assets/icons/icons';
import './PopupMenu.scss';

interface PopupMenuProps {
  isVisible: boolean,
}

function PopupMenu({ isVisible }: PopupMenuProps) {
  const click = () => null;

  const closePopup = () => !isVisible;

  return (
    <nav className={`popup-menu ${isVisible ? 'active' : ''}`} onMouseLeave={closePopup}>
      <PopupMenuItem label="Make as unread" icon={<SettingsIcon />} handleClick={click} />
      <PopupMenuItem label="Delete chat" icon={<SettingsIcon />} handleClick={click} />
    </nav>
  );
}

export default PopupMenu;
