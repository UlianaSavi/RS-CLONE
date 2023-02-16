import { useState } from 'react';
import './ChatWindow.scss';
import MessageInput from '../MessageInput/MessageInput';
import { BubblesDateGroup } from '../BubblesDateGroup/BubblesDateGroup';
import SendImagePopap from '../SendImagePopap/SendImagePopap';

function ChatWindow() {
  const [photoUrl, setPhotoUrl] = useState('');

  return (
    <div className="chat-window">
      <div className="chat-window__wrapper">
        <BubblesDateGroup date="Today" />
      </div>
      <MessageInput getPhoto={setPhotoUrl} />
      <svg height="0" width="0">
        <defs>
          <clipPath id="svgPath">
            <path fill="#FFFFFF" d="M10,10H0V0H0A10,10,0,0,0,10,10Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="chat-window__bg-image" />
      <SendImagePopap imageUrl={photoUrl} />
    </div>
  );
}

export default ChatWindow;
