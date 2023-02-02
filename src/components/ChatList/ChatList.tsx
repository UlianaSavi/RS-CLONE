import ChatPreview from '../ChatPreview/ChatPreview';
import './ChatList.scss';

function ChatList() {
  return (
    <div className="chat-list">
      <ChatPreview />
      <ChatPreview />
      <ChatPreview />
      <ChatPreview />
      <ChatPreview />
    </div>
  );
}

export default ChatList;
