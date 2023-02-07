import { useState } from 'react';
import TopPanel from '../TopPanel/TopPanel';
import ChatWindow from '../ChatWindow/ChatWindow';
import './Chat.scss';
import TopPanelSettings from '../TopPanelSettings/TopPanelSettings';

interface ChatProps {
  activeChatId: number
}

function Chat({ activeChatId }: ChatProps) {
  const [isActivePopup, setActivePopup] = useState(false);
  function flipFlop() {
    setActivePopup(!isActivePopup);
  }

  return (
    <div className="chat">
      <TopPanel
        activeChatId={activeChatId}
        callback={() => flipFlop()}
      />
      <ChatWindow />
      <TopPanelSettings isOpen={isActivePopup} onClose={() => setActivePopup(false)} />
    </div>
  );
}

export default Chat;
