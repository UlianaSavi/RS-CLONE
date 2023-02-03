import TopPanel from '../TopPanel/TopPanel';
import ChatInput from '../ChatInput/ChatInput';
import ChatWindow from '../ChatWindow/ChatWindow';
import './Chat.scss';

function Chat() {
  return (
    <div className="chat">
      <TopPanel />
      <ChatWindow />
      <ChatInput />
    </div>
  );
}

export default Chat;
