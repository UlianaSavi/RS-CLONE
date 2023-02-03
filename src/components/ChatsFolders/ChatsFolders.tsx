import ChatsFolderItem from '../ChatsFolderItem/ChatsFolderItem';
import './ChatsFolders.scss';

function ChatsFolders() {
  return (
    <div className="chats-folders">
      <ChatsFolderItem />
      <ChatsFolderItem />
      <ChatsFolderItem />
    </div>
  );
}

export default ChatsFolders;
