/* eslint-disable no-undef */
import { useState, useEffect, useContext } from 'react';
import {
  collection, query, where, getDocs,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { AuthContext } from '../../auth/AuthContext';

import ChatPreview from '../ChatPreview/ChatPreview';
import ContextMenu from '../ContextMenu/ContextMenu';

import type { UserData, User } from '../../types';
import './ChastList.scss';

interface ChatsListProps {
  data: UserData[],
  activeChatId: number,
  setActiveChatId: React.Dispatch<React.SetStateAction<number>>
}

function ChatsList({ data, activeChatId, setActiveChatId }: ChatsListProps) {
  // Chats list
  const currentUser: User = useContext(AuthContext) as User;
  console.log('you are: ', currentUser);

  const chats: any = [];

  const getUsers = async () => {
    const q = query(collection(db, 'users'), where('uid', '!=', currentUser.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, ' => ', doc.data());
      chats.push(doc.data());
    });
    console.log(chats);
  };
  getUsers();

  const chatsArr = data
    .map((chat) => (
      <ChatPreview
        key={chat.name}
        data={chat}
        isActive={chat.id === activeChatId}
        setActiveChatId={setActiveChatId}
      />
    ));

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
