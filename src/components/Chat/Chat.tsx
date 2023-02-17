import { useState, useContext } from 'react';
import TopPanel from '../TopPanel/TopPanel';
import ChatWindow from '../ChatWindow/ChatWindow';
import './Chat.scss';
import TopPanelSettings from '../TopPanelSettings/TopPanelSettings';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { SendImageContextProvider } from '../../context/SendingImageContext';

function Chat() {
  const [isActivePopup, setActivePopup] = useState(false);
  function flipFlop() {
    setActivePopup(!isActivePopup);
  }

  const { activeChatID } = useContext(ActiveChatContext);

  return (
    <SendImageContextProvider>
      <div className="chat">
        {activeChatID && (
        <TopPanel
          callback={() => flipFlop()}
        />
        )}
        <ChatWindow />
        <TopPanelSettings isOpen={isActivePopup} onClose={() => setActivePopup(false)} />
      </div>
    </SendImageContextProvider>
  );
}

export default Chat;
