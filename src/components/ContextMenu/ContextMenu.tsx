import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import './ContextMenu.scss';

interface ContextMenuProps {
  isVisible: boolean,
  handleMouseLeave: () => void,
  position: { x: number, y: number };
  chatID: string
}

function ContextMenu({
  isVisible, handleMouseLeave, position, chatID,
}: ContextMenuProps) {
  const deleteChat = () => {
    console.log('underRMK', chatID);
  };

  return (
    <nav
      className={`context-menu ${isVisible ? 'active' : ''}`}
      onMouseLeave={handleMouseLeave}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    >
      <PopupMenuItem label="Delete chat" icon={<TrashIcon />} handleClick={deleteChat} />
    </nav>
  );
}

export default ContextMenu;
