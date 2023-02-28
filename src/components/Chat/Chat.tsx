import { useState, useContext } from 'react';
import TopPanel from '../TopPanel/TopPanel';
import ChatWindow from '../ChatWindow/ChatWindow';
import './Chat.scss';
import TopPanelSettings from '../TopPanelSettings/TopPanelSettings';
import { ActiveChatContext } from '../../context/ActiveChatContext';

function Chat(props: {chatClass: string}) {
  const [isActivePopup, setActivePopup] = useState(false);
  const { chatClass } = props;

  function flipFlop() {
    setActivePopup(!isActivePopup);
  }

  const { activeChatID } = useContext(ActiveChatContext);

  return (
    <div className={chatClass}>
      {activeChatID && (
      <TopPanel
        callback={() => flipFlop()}
      />
      )}
      <ChatWindow />
      <TopPanelSettings isOpen={isActivePopup} onClose={() => setActivePopup(false)} />
    </div>
  );
}

export default Chat;
