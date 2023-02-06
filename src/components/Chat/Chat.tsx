import { useState } from 'react';
import TopPanel from '../TopPanel/TopPanel';
import ChatWindow from '../ChatWindow/ChatWindow';
import './Chat.scss';
import TopPanelSettings from '../TopPanelSettings/TopPanelSettings';

function Chat() {
  const [isActivePopup, setActivePopup] = useState(false);
  function flipFlop() {
    setActivePopup(!isActivePopup);
  }
  return (
    <div className="chat">
      <TopPanel callback={() => flipFlop()} />
      <ChatWindow />
      <TopPanelSettings isOpen={isActivePopup} onClose={() => setActivePopup(false)} />
    </div>
  );
}

export default Chat;
