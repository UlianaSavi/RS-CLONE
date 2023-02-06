/* eslint-disable no-undef */
import { useState } from 'react';
import Avatar from '../Avatar/Avatar';
import './ChatPreview.scss';

interface ChatPreviewProps {
  data: {
    name: string,
    avatar: string,
    lastMessage: string,
    timeOfLastMessage: string,
    unreadMessages: number
  },
  isActive: boolean,
}

function ChatPreview({ data, isActive }: ChatPreviewProps) {
  const {
    name, avatar, lastMessage, timeOfLastMessage, unreadMessages,
  } = data;

  const [isChatActive, setChatActive] = useState(isActive);

  const toggleChatActive = () => setChatActive(!isChatActive);

  return (
    <button type="button" className={`chat-preview ${isChatActive ? 'active' : ''}`} onClick={toggleChatActive}>
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
  );
}

export default ChatPreview;
