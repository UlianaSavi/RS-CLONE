import { useContext } from 'react';
import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import { deleteChat } from '../../API/api';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import type { User } from '../../types';
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
  const currentUser: User = useContext(AuthContext) as User;
  const { userID } = useContext(UserContext);
  const handleDeleteBtn = () => deleteChat(chatID, currentUser.uid, userID);

  return (
    <nav
      className={`context-menu ${isVisible ? 'active' : ''}`}
      onMouseLeave={handleMouseLeave}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    >
      <PopupMenuItem label="Delete chat" icon={<TrashIcon />} handleClick={handleDeleteBtn} />
    </nav>
  );
}

export default ContextMenu;
