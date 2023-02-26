import { useState, useEffect, useContext } from 'react';
import {
  collection, query, where, getDocs, onSnapshot, doc, DocumentData, getDoc,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { SelectedUsersContext } from '../../context/SelectedUsersContext';

import ChatPreview from '../ChatPreview/ChatPreview';
import ContextMenu from '../ContextMenu/ContextMenu';

import type { User } from '../../types';
import './ChastList.scss';
import DeletionPopup from '../DeletionPopup/DeletionPopup';

interface ChatsListProps {
  activeFolder: number,
  isSearchMode: boolean
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>,
  searchInput: string
  setActiveFolder: React.Dispatch<React.SetStateAction<number>>,
  isGroupCreationMode: boolean,
}

function ChatsList({
  activeFolder, isSearchMode, setSearchMode, searchInput, setActiveFolder, isGroupCreationMode,
}: ChatsListProps) {
  // Context menu
  const [showMenu, setShowMenu] = useState(false);
  const [showDeletionPopup, setShowDeletionPopup] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [userIdUnderRMK, setUserIdUnderRMK] = useState('');

  const handleContextMenu = (event: React.MouseEvent, id: string) => {
    const target = event.target as HTMLElement;
    if (target.closest('.chat-preview') && !isSearchMode) {
      event.preventDefault();
      setUserIdUnderRMK(id);
      setShowMenu(true);
      setMenuPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const closeContextMenu = () => setShowMenu(false);

  useEffect(() => {
    document.addEventListener('click', closeContextMenu);
    return () => {
      document.removeEventListener('click', closeContextMenu);
    };
  }, []);

  const { currentUser } = useContext(AuthContext);
  const { userID, setUserID } = useContext(UserContext);
  const { activeChatID } = useContext(ActiveChatContext);
  const { selectedUsers } = useContext(SelectedUsersContext);

  const [chatsArr, setChatsArr] = useState([]);

  const updateChatsList = (chatsData: DocumentData) => {
    setChatsArr(chatsData
      .map((chat: DocumentData, index: number) => (
        <ChatPreview
          key={chat.userInfo.uid || index}
          data={chat}
          isActive={chat?.userInfo.uid === userID
            || (chat?.userInfo?.groupID === userID && activeFolder === 1)}
          setActiveUserID={setUserID}
          isSearchMode={isSearchMode}
          setSearchMode={setSearchMode}
          onContextMenu={handleContextMenu}
          activeFolder={activeFolder}
          isGroupCreationMode={isGroupCreationMode}
        />
      )));
  };

  const getAllUsers = async () => {
    if (currentUser?.uid) {
      const chatsData: DocumentData[] = [];
      const q = query(collection(db, 'users'), where('uid', '!=', currentUser.uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((d) => {
        const data = d.data();
        if (!searchInput) chatsData.push({ userInfo: d.data() });
        if (searchInput && data.displayName.toLowerCase().includes(searchInput.toLowerCase())) {
          chatsData.push({ userInfo: d.data() });
        }
      });
      updateChatsList(chatsData);
    }
  };

  const getUserChats = async () => {
    if (currentUser?.uid && activeFolder === 0) {
      onSnapshot(doc(db, 'userChats', currentUser.uid), (d) => {
        const data = d.data();
        if (!data) return;
        const dataArray = Object.values(data);
        if (dataArray.some((item) => !item.lastMessage?.date)) return;
        const promises = dataArray.map(async (item) => {
          const user = await getDoc(doc(db, 'users', item.userInfo.uid));
          const userData = user.data() as User;
          return {
            lastMessage: item.lastMessage,
            unreadMessages: item?.unreadMessages || 0,
            userInfo: userData,
          };
        });
        Promise.all(promises).then((updatedDataArray) => {
          updateChatsList(updatedDataArray.sort((a, b) => b.lastMessage.date - a.lastMessage.date));
        });
      });
    }
  };

  const getUserGroups = async () => {
    if (currentUser?.uid) {
      onSnapshot(doc(db, 'userGroups', currentUser.uid), (d) => {
        const data = d.data();
        if (!data) return;
        const dataArray = Object.values(data);
        if (dataArray.some((item) => !item.lastMessage?.date)) return;
        const groupsData = dataArray.map((item) => ({
          lastMessage: item?.lastMessage || '',
          unreadMessages: item?.unreadMessages || 0,
          userInfo: item.groupInfo,
        }));
        updateChatsList(groupsData.sort((a, b) => b.lastMessage.date - a.lastMessage.date));
      });
    }
  };

  const showChatsList = async () => {
    if (isSearchMode) {
      setActiveFolder(0);
      await getAllUsers();
    } else if (activeFolder === 0) {
      await getUserChats();
    } else {
      await getUserGroups();
    }
  };

  useEffect(() => {
    showChatsList();
  }, [currentUser?.uid,
    activeChatID, userID, activeFolder, isSearchMode, searchInput, selectedUsers]);

  return (
    <>
      <div className={`chat-list ${isSearchMode ? 'search-view' : ''}`}>
        {chatsArr}
      </div>
      <ContextMenu
        isVisible={showMenu}
        showPopup={setShowDeletionPopup}
        handleMouseLeave={closeContextMenu}
        position={menuPosition}
        userIdUnderRMK={userIdUnderRMK}
      />
      <DeletionPopup
        isVisible={showDeletionPopup}
        setVisibility={setShowDeletionPopup}
        userIdUnderRMK={userIdUnderRMK}
      />
    </>
  );
}

export default ChatsList;
