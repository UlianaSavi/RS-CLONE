/* eslint-disable no-undef */
import { useState, useEffect, useContext } from 'react';
import {
  collection, query, where, getDocs,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { AuthContext } from '../../context/AuthContext';
import { ActiveChatContext } from '../../context/ActiveChatContext';

import ChatPreview from '../ChatPreview/ChatPreview';
import ContextMenu from '../ContextMenu/ContextMenu';

import type { User } from '../../types';
import './ChastList.scss';

function ChatsList() {
  const { activeChatID, setActiveChatID } = useContext(ActiveChatContext);

  const currentUser: User = useContext(AuthContext) as User;
  const [chatsArr, setChatsArr] = useState([]);
  const getUsers = async () => {
    if (currentUser.uid) {
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
            isActive={chat.uid === activeChatID}
            setActiveChatId={setActiveChatID}
          />
        )));
    }
  };

  useEffect(() => {
    getUsers();
  }, [currentUser.uid]);

  useEffect(() => {
    getUsers();
  }, [activeChatID]);

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
