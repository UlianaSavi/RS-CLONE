import ChatsFolderItem from '../ChatsFolderItem/ChatsFolderItem';
import './FoldersTabs.scss';

function FoldersTabs() {
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

export default FoldersTabs;
