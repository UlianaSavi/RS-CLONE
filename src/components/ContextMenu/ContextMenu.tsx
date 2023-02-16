import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import './ContextMenu.scss';

interface ContextMenuProps {
  isVisible: boolean,
  handleMouseLeave: () => void,
  position: { x: number, y: number };
  showPopup: React.Dispatch<React.SetStateAction<boolean>>,
}

function ContextMenu({
  isVisible, handleMouseLeave, position, showPopup,
}: ContextMenuProps) {
  return (
    <nav
      className={`context-menu ${isVisible ? 'active' : ''}`}
      onMouseLeave={handleMouseLeave}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    >
      <PopupMenuItem label="Delete chat" icon={<TrashIcon />} handleClick={() => showPopup(true)} />
    </nav>
  );
}

export default ContextMenu;
