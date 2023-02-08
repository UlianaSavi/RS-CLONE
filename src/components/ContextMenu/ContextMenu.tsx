import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import { SettingsIcon } from '../../assets/icons/icons';
import './ContextMenu.scss';

interface ContextMenuProps {
  isVisible: boolean,
  handleMouseLeave: () => void,
  position: { x: number, y: number };
}

function ContextMenu({ isVisible, handleMouseLeave, position }: ContextMenuProps) {
  const click = () => null;

  return (
    <nav
      className={`context-menu ${isVisible ? 'active' : ''}`}
      onMouseLeave={handleMouseLeave}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    >
      <PopupMenuItem label="Make as unread" icon={<SettingsIcon />} handleClick={click} />
      <PopupMenuItem label="Delete chat" icon={<SettingsIcon />} handleClick={click} />
    </nav>
  );
}

export default ContextMenu;
