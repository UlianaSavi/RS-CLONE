/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import ChatPreview from '../ChatPreview/ChatPreview';
import ContextMenu from '../ContextMenu/ContextMenu';
import type { UserData } from '../../types';
import './ChastList.scss';

interface ChatsListProps {
  data: UserData[],
  activeChatId: number,
  setActiveChatId: React.Dispatch<React.SetStateAction<number>>
}

function ChatsList({ data, activeChatId, setActiveChatId }: ChatsListProps) {
  const chatsArr = data
    .map((chat) => (
      <ChatPreview
        key={chat.name}
        data={chat}
        isActive={chat.id === activeChatId}
        setActiveChatId={setActiveChatId}
      />
    ));

  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setShowMenu(true);
    setMenuPosition({ x: event.clientX, y: event.clientY });
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
