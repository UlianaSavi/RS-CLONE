import { useState } from 'react';
import TopPanel from '../TopPanel/TopPanel';
import MessageInput from '../MessageInput/MessageInput';
import ChatWindow from '../ChatWindow/ChatWindow';
import './Chat.scss';
import TopPanelSettings from '../TopPanelSettings/TopPanelSettings';

function Chat() {
  const [isActivePopup, setActivePopup] = useState(false);
  function flipFlop() {
    setActivePopup(!isActivePopup);
  }

  const data = {
    avatar: '',
    title: 'John',
    status: 'online',
  };

  return (
    <div className="chat">
      <TopPanel data={data} callback={() => flipFlop()} />
      <ChatWindow />
      <MessageInput />
      <TopPanelSettings isOpen={isActivePopup} onClose={() => setActivePopup(false)} />
    </div>
  );
}

export default Chat;
