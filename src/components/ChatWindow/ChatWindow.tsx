import { useContext } from 'react';
import MessageInput from '../MessageInput/MessageInput';
import { BubblesDateGroup } from '../BubblesDateGroup/BubblesDateGroup';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import './ChatWindow.scss';

function ChatWindow() {
  const { activeChatID } = useContext(ActiveChatContext);

  return (
    <div className="chat-window">
      {activeChatID && (
      <div className="chat-window__wrapper">
        {/* <BubblesDateGroup date="Yesterday" /> */}
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
    </div>
  );
}

export default ChatWindow;
