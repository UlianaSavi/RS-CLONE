/* eslint-disable no-undef */
import { useState, useEffect, useContext } from 'react';
import {
  collection, query, where, getDocs,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { AuthContext } from '../../auth/AuthContext';

import ChatPreview from '../ChatPreview/ChatPreview';
import ContextMenu from '../ContextMenu/ContextMenu';

import type { User } from '../../types';
import './ChastList.scss';

interface ChatsListProps {
  activeChatId: string,
  setActiveChatId: React.Dispatch<React.SetStateAction<string>>
}

function ChatsList({ activeChatId, setActiveChatId }: ChatsListProps) {
  // Chats list
  const currentUser: User = useContext(AuthContext) as User;

  const [chatsArr, setChatsArr] = useState([]);

  const getUsers = async () => {
    const q = query(collection(db, 'users'), where('uid', '!=', currentUser.uid));
    const querySnapshot = await getDocs(q);
    const chatsData: any = [];
    querySnapshot.forEach((doc) => {
      chatsData.push(doc.data());
    });
    console.log(chatsData);
    setChatsArr(chatsData
      .map((chat: User) => (
        <ChatPreview
          key={chat.uid}
          data={chat}
          isActive={chat.uid === activeChatId}
          setActiveChatId={setActiveChatId}
        />
      )));
  };
  getUsers();

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
