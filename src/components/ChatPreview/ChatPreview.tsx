/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import {
  onSnapshot, doc, updateDoc, getDoc,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Avatar from '../Avatar/Avatar';
import { AuthContext } from '../../context/AuthContext';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import type { User, UserChat } from '../../types';
import './ChatPreview.scss';
import { ActiveVisibilitySidebar } from '../../context/VisibleSidebarContext';
import { convertTimestamp } from '../../hooks/timestampConverter';
import { MAIN_GROUP_CHAT_ID } from '../../API/api';

interface ChatPreviewProps {
  data: UserChat,
  isActive: boolean,
  setActiveUserID: React.Dispatch<React.SetStateAction<string>>,
  isSearchMode: boolean,
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>,
  onContextMenu: (event: React.MouseEvent, id: string) => void,
  activeFolder: number,
}

function ChatPreview({
  data, isActive, setActiveUserID, isSearchMode, setSearchMode, onContextMenu, activeFolder,
}: ChatPreviewProps) {
  const {
    uid, displayName, photoURL,
  } = data.userInfo;

  const { activeChatID, setActiveChatID } = useContext(ActiveChatContext);
  const currentUser: User = useContext(AuthContext) as User;
  const { setActiveSidebar } = useContext(ActiveVisibilitySidebar);

  const resetMessagesCounter = async () => {
    if (activeChatID) {
      const res = await getDoc(doc(db, 'userChats', currentUser.uid));
      const chats = res.data();
      if (!chats) return;
      if (chats[activeChatID]) {
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [`${activeChatID}.unreadMessages`]: 0,
        });
      }
    }
  };
  const [isOnlineStatus, setIsOnlineStatus] = useState(data.userInfo?.isOnline || false);

  const selectChat = () => {
    const combinedID = currentUser.uid > data.userInfo.uid
      ? `${currentUser.uid}${data.userInfo.uid}`
      : `${data.userInfo.uid}${currentUser.uid}`;
    setActiveUserID(data.userInfo.uid);
    setActiveChatID(combinedID);
    resetMessagesCounter();
    setSearchMode(false);
    if (window.innerWidth <= 920) setActiveSidebar(false);
  };

  const selectGroup = () => {
    setActiveUserID(MAIN_GROUP_CHAT_ID);
    setActiveChatID(MAIN_GROUP_CHAT_ID);
    resetMessagesCounter();
    setSearchMode(false);
    if (window.innerWidth <= 920) setActiveSidebar(false);
  };

  if (isSearchMode) {
    onSnapshot(doc(db, 'users', uid), (d) => {
      const userData = d.data();
      if (!userData) return;
      setIsOnlineStatus(userData.isOnline);
    });
  }

  const lastSeen = isSearchMode ? !isOnlineStatus && data.userInfo?.lastVisitAt ? convertTimestamp(data.userInfo?.lastVisitAt) : '' : '';
  const lastMessageTime = !isSearchMode && !activeFolder ? convertTimestamp(data?.lastMessage?.date) : '';

  const handleContextMenu = (event: React.MouseEvent) => {
    onContextMenu(event, uid);
  };

  return (
    <button
      type="button"
      className={`chat-preview ${isActive ? 'active' : ''}`}
      onClick={activeFolder ? selectGroup : selectChat}
      onContextMenu={handleContextMenu}
    >
      <div className="chat-preview-wrapper">
        <Avatar image={photoURL} />
        <div className="chat-preview-text">
          <div className="chat-preview__title">{displayName}</div>
          {isSearchMode
            ? <div className="chat-preview__online-status">{isOnlineStatus ? 'Online' : `Last seen ${lastSeen}`}</div>
            : <div className="chat-preview__last-message">{data?.lastMessage.text}</div>}
        </div>
      </div>
      {!isSearchMode && (
      <div className="chat-preview__info">
        <div className="chat-preview__messenge-time">{lastMessageTime}</div>
        {data?.unreadMessages && !isActive ? <div className="chat-preview__messenge-num">{data?.unreadMessages}</div> : null}
      </div>
      )}
    </button>
  );
}

export default ChatPreview;
