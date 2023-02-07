/* eslint-disable no-undef */
import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import { SettingsIcon } from '../../assets/icons/icons';
import './ContextMenu.scss';

interface ContextMenuProps {
  isVisible: boolean,
  handleMouseLeave: () => void
}

function ContextMenu({ isVisible, handleMouseLeave }: ContextMenuProps) {
  const click = () => null;

  return (
    <nav
      className={`context-menu ${isVisible ? 'active' : ''}`}
      onMouseLeave={handleMouseLeave}
    >
      <PopupMenuItem label="Make as unread" icon={<SettingsIcon />} handleClick={click} />
      <PopupMenuItem label="Delete chat" icon={<SettingsIcon />} handleClick={click} />
    </nav>
  );
}

export default ContextMenu;
