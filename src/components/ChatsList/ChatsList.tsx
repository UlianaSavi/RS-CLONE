/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
import { useState, useEffect, useContext } from 'react';
import {
  collection, query, where, getDocs, onSnapshot, doc, DocumentData, getDoc,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import { ActiveChatContext } from '../../context/ActiveChatContext';

import ChatPreview from '../ChatPreview/ChatPreview';
import ContextMenu from '../ContextMenu/ContextMenu';

import type { User, UserChat } from '../../types';
import './ChastList.scss';
import DeletionPopup from '../DeletionPopup/DeletionPopup';

interface ChatsListProps {
  activeFolder: number,
  isSearchMode: boolean
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>,
}

function ChatsList({ activeFolder, isSearchMode, setSearchMode }: ChatsListProps) {
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

  const currentUser: User = useContext(AuthContext) as User;
  const { userID, setUserID } = useContext(UserContext);
  const { activeChatID } = useContext(ActiveChatContext);

  const [chatsArr, setChatsArr] = useState([]);

  const updateChatsList = (chatsData: any) => {
    setChatsArr(chatsData
      .map((chat: UserChat) => (
        <ChatPreview
          key={chat.userInfo.uid}
          data={chat}
          isActive={chat?.userInfo.uid === userID}
          setActiveUserID={setUserID}
          isSearchMode={isSearchMode}
          setSearchMode={setSearchMode}
          onContextMenu={handleContextMenu}
        />
      )));
  };

  const getAllUsers = async () => {
    if (currentUser?.uid) {
      const chatsData: DocumentData[] = [];
      const q = query(collection(db, 'users'), where('uid', '!=', currentUser.uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((d) => {
        chatsData.push({ userInfo: d.data() });
      });
      updateChatsList(chatsData);
    }
  };

  const getUserChats = async () => {
    if (currentUser?.uid) {
      const chatsData: DocumentData[] = [];
      onSnapshot(doc(db, 'userChats', currentUser.uid), (d) => {
        chatsData.length = 0;
        const data = d.data();
        if (!data) return;
        const dataArray = Object.values(data);
        if (dataArray.some((item) => !item.lastMessage?.date)) return;

        const promises = dataArray.map(async (item) => {
          const user = await getDoc(doc(db, 'users', item.userInfo.uid));
          const userData = user.data() as User;
          chatsData.push({
            lastMessage: item.lastMessage,
            unreadMessages: item?.unreadMessages || 0,
            userInfo: userData,
          });
        });

        Promise.all(promises).then(() => {
          updateChatsList(chatsData.sort((a, b) => b.lastMessage.date - a.lastMessage.date));
        });
      });
    }
  };

  const showChatsList = async () => {
    const res = isSearchMode ? await getAllUsers() : await getUserChats();
    return res;
  };

  useEffect(() => {
    showChatsList();
  }, [currentUser?.uid, activeChatID, userID, activeFolder, isSearchMode]);

  return (
    <>
      <div className="chat-list">
        {chatsArr}
      </div>
      <ContextMenu
        isVisible={showMenu}
        showPopup={setShowDeletionPopup}
        handleMouseLeave={closeContextMenu}
        position={menuPosition}
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
