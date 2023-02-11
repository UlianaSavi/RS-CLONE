/* eslint-disable no-undef */
import { useState, useEffect, useContext } from 'react';
import {
  collection, query, where, getDocs, onSnapshot, doc,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { AuthContext } from '../../context/AuthContext';
import { ActiveChatContext } from '../../context/ActiveChatContext';

import ChatPreview from '../ChatPreview/ChatPreview';
import ContextMenu from '../ContextMenu/ContextMenu';

import type { User } from '../../types';
import './ChastList.scss';

interface ChatsListProps {
  activeFolder: number,
}

function ChatsList({ activeFolder }: ChatsListProps) {
  const currentUser: User = useContext(AuthContext) as User;
  const { activeChatID, setActiveChatID } = useContext(ActiveChatContext);
  const [chatsArr, setChatsArr] = useState([]);

  const updateChatsList = (chatsData: any) => {
    setChatsArr(chatsData
      .map((chat: User) => (
        <ChatPreview
          key={chat.uid}
          data={chat}
          isActive={chat.uid === activeChatID}
          setActiveChatId={setActiveChatID}
        />
      )));
  };

  const getUserChats = async () => {
    if (currentUser.uid) {
      const chatsData: any = [];
      if (!activeFolder) {
        const q = query(collection(db, 'users'), where('uid', '!=', currentUser.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((d) => {
          chatsData.push(d.data());
        });
      } else {
        onSnapshot(doc(db, 'userChats', currentUser.uid), (d) => {
          const data = d.data();
          if (!data) return;
          const dataArray = Object.values(data);
          dataArray.forEach((item) => {
            chatsData.push(item.userInfo);
          });
          updateChatsList(chatsData);
        });
      }
      updateChatsList(chatsData);
    }
  };

  useEffect(() => {
    getUserChats();
  }, [currentUser.uid, activeChatID, activeFolder]);

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
