/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import { useContext, useState, useEffect } from 'react';
import {
  onSnapshot, doc, updateDoc, getDoc, DocumentData,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Avatar from '../Avatar/Avatar';
import { AuthContext } from '../../context/AuthContext';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { UserContext } from '../../context/UserContext';
import './ChatPreview.scss';
import { ActiveVisibilitySidebar } from '../../context/VisibleSidebarContext';
import { SelectedUsersContext } from '../../context/SelectedUsersContext';
import { convertTimestamp } from '../../hooks/timestampConverter';
import { MAIN_GROUP_CHAT_ID } from '../../API/api';

interface ChatPreviewProps {
  data: DocumentData,
  isActive: boolean,
  setActiveUserID: React.Dispatch<React.SetStateAction<string>>,
  isSearchMode: boolean,
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>,
  onContextMenu: (event: React.MouseEvent, id: string) => void,
  activeFolder: number,
  isGroupCreationMode: boolean,
}

function ChatPreview({
  data,
  isActive,
  setActiveUserID,
  isSearchMode,
  setSearchMode,
  onContextMenu,
  activeFolder,
  isGroupCreationMode,
}: ChatPreviewProps) {
  const {
    uid, displayName, photoURL,
  } = data.userInfo;

  const { activeChatID, setActiveChatID } = useContext(ActiveChatContext);
  const { currentUser } = useContext(AuthContext);
  const { setActiveSidebar } = useContext(ActiveVisibilitySidebar);
  const { selectedUsers, setSelectedUsers } = useContext(SelectedUsersContext);
  const { userID } = useContext(UserContext);

  const resetCounter = async (isGroup: boolean) => {
    if (currentUser) {
      const res = await getDoc(doc(db, isGroup ? 'userGroups' : 'userChats', currentUser.uid));
      const chats = res.data();
      if (!chats) return;
      if (chats[activeChatID]) {
        await updateDoc(doc(db, isGroup ? 'userGroups' : 'userChats', currentUser.uid), {
          [`${activeChatID}.unreadMessages`]: 0,
        });
      }
    }
  };

  const resetMessagesCounter = async () => {
    if (activeChatID) {
      if (activeChatID === userID) {
        resetCounter(true);
      } else {
        resetCounter(false);
      }
    }
  };

  const [isOnlineStatus, setIsOnlineStatus] = useState(data.userInfo?.isOnline || false);

  const selectChat = () => {
    if (currentUser) {
      const combinedID = (currentUser.uid) > data.userInfo.uid
        ? `${currentUser.uid}${data.userInfo.uid}`
        : `${data.userInfo.uid}${currentUser.uid}`;
      setActiveUserID(data.userInfo.uid);
      setActiveChatID(combinedID);
      resetMessagesCounter();
      setSearchMode(false);
      if (window.innerWidth <= 920) setActiveSidebar(false);
    }
  };

  const selectGroup = () => {
    setActiveUserID(data?.userInfo.groupID);
    setActiveChatID(data?.userInfo.groupID);
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

  const lastSeen = isSearchMode && !isOnlineStatus && data.userInfo?.lastVisitAt ? convertTimestamp(data.userInfo?.lastVisitAt) : '';
  const lastMessageTime = !isSearchMode ? convertTimestamp(data?.lastMessage?.date) : '';

  const handleContextMenu = (event: React.MouseEvent) => {
    onContextMenu(event, uid || MAIN_GROUP_CHAT_ID);
  };

  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    if (!isGroupCreationMode) {
      if (activeFolder) selectGroup();
      else selectChat();
    } else {
      setChecked(!checked);
      if (!checked) {
        setSelectedUsers([...selectedUsers, uid]);
      } else {
        setSelectedUsers(selectedUsers.filter((user) => user !== uid));
      }
    }
  };

  useEffect(() => {
    const isSelected = selectedUsers.includes(uid);
    setChecked(isSelected);
  }, []);

  const hanldeCheckbox = () => null;

  return (
    <button
      type="button"
      className={`chat-preview ${isActive ? 'active' : ''}`}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
    >
      <div className="chat-preview-wrapper">
        {isGroupCreationMode && (
          <>
            <input
              className="chat-preview__checkbox"
              type="checkbox"
              id={`user${uid}`}
              checked={checked}
              onChange={hanldeCheckbox}
            />
            <label htmlFor={`user${uid}`}> </label>
          </>
        )}
        <Avatar image={photoURL} />
        <div className="chat-preview-text">
          <div className="chat-preview__title">{displayName}</div>
          {isSearchMode
            ? <div className="chat-preview__online-status">{isOnlineStatus ? 'online' : `last seen ${lastSeen}`}</div>
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
