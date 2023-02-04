import ChatInfo from '../ChatInfo/ChatInfo';
import MessageInput from '../MessageInput/MessageInput';
import ChatWindow from '../ChatWindow/ChatWindow';
import './Chat.scss';

function Chat() {
  return (
    <div className="chat">
      <ChatInfo />
      <ChatWindow />
      <MessageInput />
    </div>
  );
}

export default Chat;
