import ChatsFolderItem from '../ChatsFolderItem/ChatsFolderItem';
import './ChatsFolders.scss';

function ChatsFolder() {
  return (
    <div className="folders-tabs">
      <div className="folders-tabs__wrapper">
        <ChatsFolderItem />
        <ChatsFolderItem />
        <ChatsFolderItem />
        <ChatsFolderItem />
        <ChatsFolderItem />
        <ChatsFolderItem />
      </div>
    </div>
  );
}

export default ChatsFolder;
