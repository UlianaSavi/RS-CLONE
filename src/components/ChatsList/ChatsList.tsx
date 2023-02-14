/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
import { useState, useEffect, useContext } from 'react';
import {
  collection, query, where, getDocs, onSnapshot, doc, DocumentData,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import { ActiveChatContext } from '../../context/ActiveChatContext';

import ChatPreview from '../ChatPreview/ChatPreview';
import ContextMenu from '../ContextMenu/ContextMenu';

import type { User, UserChat } from '../../types';
import './ChastList.scss';

interface ChatsListProps {
  activeFolder: number,
  isSearchMode: boolean
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>,
}

function ChatsList({ activeFolder, isSearchMode, setSearchMode }: ChatsListProps) {
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
        dataArray.forEach((item) => {
          chatsData.push(item);
        });
        updateChatsList(chatsData.sort((a, b) => b.lastMessage.date - a.lastMessage.date));
      });
    }
  };

  const showChatsList = async () => {
    const res = isSearchMode ? await getAllUsers() : await getUserChats();
    return res;
  };

  useEffect(() => {
    showChatsList();
  }, [currentUser?.uid, userID, activeChatID, activeFolder, isSearchMode]);

  // Context menu
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest('.chat-preview')) {
      event.preventDefault();
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

  return (
    <>
      <div className="chat-list" onContextMenu={handleContextMenu}>
        {chatsArr}
      </div>
      <ContextMenu
        isVisible={showMenu}
        handleMouseLeave={closeContextMenu}
        position={menuPosition}
      />
    </>
  );
}

export default ChatsList;
