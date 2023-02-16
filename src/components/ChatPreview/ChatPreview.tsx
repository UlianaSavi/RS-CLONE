/* eslint-disable no-unused-vars */
import * as firestore from 'firebase/firestore';
import { useContext } from 'react';
import {
  doc, updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Avatar from '../Avatar/Avatar';
import { AuthContext } from '../../context/AuthContext';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import type { User, UserChat } from '../../types';
import './ChatPreview.scss';

interface ChatPreviewProps {
  data: UserChat,
  isActive: boolean,
  setActiveUserID: React.Dispatch<React.SetStateAction<string>>,
  isSearchMode: boolean,
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>,
  onContextMenu: (event: React.MouseEvent, id: string) => void
}

function ChatPreview({
  data, isActive, setActiveUserID, isSearchMode, setSearchMode, onContextMenu,
}: ChatPreviewProps) {
  const {
    uid, displayName, photoURL,
  } = data.userInfo;

  const { activeChatID, setActiveChatID } = useContext(ActiveChatContext);
  const currentUser: User = useContext(AuthContext) as User;

  const resetUnreadMessages = async () => {
    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [`${activeChatID}.unreadMessages`]: 0,
    });
  };

  const selectChat = () => {
    const combinedID = currentUser.uid > uid ? `${currentUser.uid}${uid}` : `${uid}${currentUser.uid}`;
    setActiveUserID(uid);
    setActiveChatID(combinedID);
    setSearchMode(false);
    resetUnreadMessages();
  };

  const convertTimestamp = (timestamp: firestore.Timestamp): string => {
    const currentDate = timestamp.toDate();
    const now = new Date();

    if (currentDate.getFullYear() === now.getFullYear()
      && currentDate.getMonth() === now.getMonth()
      && currentDate.getDate() === now.getDate()) {
      const hours = currentDate.getHours().toString().padStart(2, '0');
      const minutes = currentDate.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    }
    const month = currentDate.toLocaleString('default', { month: 'short' });
    const day = currentDate.getDate();
    return `${month} ${day}`;
  };

  const handleContextMenu = (event: React.MouseEvent) => {
    onContextMenu(event, uid);
  };

  return (
    <button
      type="button"
      className={`chat-preview ${isActive ? 'active' : ''}`}
      onClick={selectChat}
      onContextMenu={handleContextMenu}
    >
      <div className="chat-preview-wrapper">
        <Avatar image={photoURL} />
        <div className="chat-preview-text">
          <div className="chat-preview__title">{displayName}</div>
          {isSearchMode
            ? <div className="chat-preview__online-status">Online</div>
            : <div className="chat-preview__last-message">{data?.lastMessage.text}</div>}
        </div>
      </div>
      {!isSearchMode && (
      <div className="chat-preview__info">
        <div className="chat-preview__messenge-time">{convertTimestamp(data?.lastMessage.date)}</div>
        {data?.unreadMessages ? <div className="chat-preview__messenge-num">{data?.unreadMessages}</div> : null}
      </div>
      )}
    </button>
  );
}

export default ChatPreview;
