import { useContext } from 'react';
import {
  doc, updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import { ReactComponent as SettingIcon } from '../../assets/icons/setting-icon.svg';
import { AuthContext } from '../../context/AuthContext';
import type { User } from '../../types';
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
    const combinedID = currentUser.uid > userIdUnderRMK ? `${currentUser.uid}${userIdUnderRMK}` : `${userIdUnderRMK}${currentUser.uid}`;
    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [`${combinedID}.unreadMessages`]: 0,
    });
  };

  return (
    <nav
      className={`context-menu ${isVisible ? 'active' : ''}`}
      onMouseLeave={handleMouseLeave}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    >
      <PopupMenuItem label="Mark as read" icon={<SettingIcon />} handleClick={resetMessagesCounter} />
      <PopupMenuItem label="Delete chat" icon={<TrashIcon />} handleClick={() => showPopup(true)} />
    </nav>
  );
}

export default ContextMenu;
