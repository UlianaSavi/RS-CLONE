import { useContext } from 'react';
import {
  doc, updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import { ReactComponent as MarkAsReadIcon } from '../../assets/icons/mark-chat-read.svg';
import { AuthContext } from '../../context/AuthContext';
import type { User } from '../../types';
import { MAIN_GROUP_CHAT_ID } from '../../API/api';
import './ContextMenu.scss';

interface ContextMenuProps {
  isVisible: boolean,
  handleMouseLeave: () => void,
  position: { x: number, y: number };
  showPopup: React.Dispatch<React.SetStateAction<boolean>>,
  userIdUnderRMK: string
}

function ContextMenu({
  isVisible, handleMouseLeave, position, showPopup, userIdUnderRMK,
}: ContextMenuProps) {
  const currentUser: User = useContext(AuthContext) as User;

  const resetMessagesCounter = async () => {
    if (userIdUnderRMK !== MAIN_GROUP_CHAT_ID) {
      const combinedID = currentUser.uid > userIdUnderRMK ? `${currentUser.uid}${userIdUnderRMK}` : `${userIdUnderRMK}${currentUser.uid}`;
      await updateDoc(doc(db, 'userChats', currentUser.uid), {
        [`${combinedID}.unreadMessages`]: 0,
      });
    } else {
      await updateDoc(doc(db, 'userGroups', currentUser.uid), {
        [`${userIdUnderRMK}.unreadMessages`]: 0,
      });
    }
  };

  return (
    <nav
      className={`context-menu ${isVisible ? 'active' : ''}`}
      onMouseLeave={handleMouseLeave}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    >
      <PopupMenuItem label="Mark as read" icon={<MarkAsReadIcon className="context-menu__read-icon" />} handleClick={resetMessagesCounter} />
      <PopupMenuItem label="Delete chat" icon={<TrashIcon />} handleClick={() => showPopup(true)} />
    </nav>
  );
}

export default ContextMenu;
