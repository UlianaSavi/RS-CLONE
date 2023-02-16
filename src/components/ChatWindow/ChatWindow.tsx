import { useState, useContext } from 'react';
import './ChatWindow.scss';
import MessageInput from '../MessageInput/MessageInput';
import { BubblesDateGroup } from '../BubblesDateGroup/BubblesDateGroup';
import SendImagePopap from '../SendImagePopap/SendImagePopap';
import { ActiveChatContext } from '../../context/ActiveChatContext';

function ChatWindow() {
  const [photo, setPhoto] = useState<{ url: string, file: File } | null>(null);
  const { activeChatID } = useContext(ActiveChatContext);

  return (
    <div className="chat-window">
      {activeChatID && (
      <div className="chat-window__wrapper">
        <BubblesDateGroup date="Today" />
      </div>
      )}
      {activeChatID && <MessageInput getPhoto={setPhoto} />}
      <svg height="0" width="0">
        <defs>
          <clipPath id="svgPath">
            <path fill="#FFFFFF" d="M10,10H0V0H0A10,10,0,0,0,10,10Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="chat-window__bg-image" />
      {photo && <SendImagePopap image={photo} />}
    </div>
  );
}

export default ChatWindow;
