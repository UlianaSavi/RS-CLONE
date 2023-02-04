import TopPanel from '../TopPanel/TopPanel';
import MessageInput from '../MessageInput/MessageInput';
import ChatWindow from '../ChatWindow/ChatWindow';
import './Chat.scss';

function Chat() {
  return (
    <div className="chat">
      <TopPanel />
      <ChatWindow />
      <MessageInput />
    </div>
  );
}

export default Chat;
