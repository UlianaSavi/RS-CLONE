import ChatPreview from '../ChatPreview/ChatPreview';
import './ChatsList.scss';

function ChatsList() {
  return (
    <div className="chats-list">
      <ChatPreview status="active" />
      <ChatPreview status="inactive" />
      <ChatPreview status="inactive" />
      <ChatPreview status="inactive" />
      <ChatPreview status="inactive" />
    </div>
  );
}

export default ChatsList;
