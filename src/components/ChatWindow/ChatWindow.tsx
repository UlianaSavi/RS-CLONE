import { useContext } from 'react';
import './ChatWindow.scss';
import MessageInput from '../MessageInput/MessageInput';
import { BubblesDateGroup } from '../BubblesDateGroup/BubblesDateGroup';
import SendImagePopap from '../SendImagePopap/SendImagePopap';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { SendImageContext } from '../../context/SendingImageContext';

function ChatWindow() {
  const { url } = useContext(SendImageContext);
  const { activeChatID } = useContext(ActiveChatContext);

  return (
    <div className="chat-window">
      {activeChatID && (
      <div className="chat-window__wrapper">
        <BubblesDateGroup date="Today" />
      </div>
      )}
      {activeChatID && <MessageInput />}
      <svg height="0" width="0">
        <defs>
          <clipPath id="svgPath">
            <path fill="#FFFFFF" d="M10,10H0V0H0A10,10,0,0,0,10,10Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="chat-window__bg-image" />
      {url && <SendImagePopap />}
    </div>
  );
}

export default ChatWindow;
