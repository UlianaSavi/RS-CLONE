import ChatPreview from '../ChatPreview/ChatPreview';
import './ChatList.scss';

function ChatList() {
  return (
    <div className="chat-list">
      <ChatPreview status="active" />
      <ChatPreview status="inactive" />
      <ChatPreview status="inactive" />
      <ChatPreview status="inactive" />
      <ChatPreview status="inactive" />
    </div>
  );
}

export default ChatList;
