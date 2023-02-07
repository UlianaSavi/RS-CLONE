/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import ContextMenu from '../ContextMenu/ContextMenu';
import Avatar from '../Avatar/Avatar';
import type { UserData } from '../../types';
import './ChatPreview.scss';

interface ChatPreviewProps {
  data: UserData,
  isActive: boolean,
  setActiveChatId: React.Dispatch<React.SetStateAction<number>>
}

function ChatPreview({
  data, isActive, setActiveChatId,
}: ChatPreviewProps) {
  const {
    id, name, avatar, lastMessage, timeOfLastMessage, unreadMessages,
  } = data;

  const selectChat = () => setActiveChatId(id);

  const [showMenu, setShowMenu] = useState(false);

  const handleContextMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowMenu(true);
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
      <button
        type="button"
        className={`chat-preview ${isActive ? 'active' : ''}`}
        onClick={selectChat}
        onContextMenu={handleContextMenu}
      >
        <div className="chat-preview-wrapper">
          <Avatar image={avatar} />
          <div className="chat-preview-text">
            <div className="chat-preview__title">{name}</div>
            <div className="chat-preview__last-message">{lastMessage}</div>
          </div>
        </div>
        <div className="chat-preview__info">
          <div className="chat-preview__messenge-time">{timeOfLastMessage}</div>
          {unreadMessages ? <div className="chat-preview__messenge-num">{unreadMessages}</div> : ''}
        </div>
      </button>
      <ContextMenu isVisible={showMenu} handleMouseLeave={closeContextMenu} />
    </>
  );
}

export default ChatPreview;
