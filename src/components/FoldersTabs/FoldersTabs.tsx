import ChatsFolderItem from '../ChatsFolderItem/ChatsFolderItem';
import './FoldersTabs.scss';

interface FoldersTabsProps {
  data: {
    title: string,
    unreadConversations: number
  }[],
  activeFolder: number,
  setActiveFolder: React.Dispatch<React.SetStateAction<number>>
}

function FoldersTabs({ data, activeFolder, setActiveFolder }: FoldersTabsProps) {
  const foldersArr = data
    .map((folder, index) => (
      <ChatsFolderItem
        key={folder.title}
        data={folder}
        isActive={index === activeFolder}
        setActiveIndex={setActiveFolder}
        index={index}
      />
    ));

  return (
    <div className="folders-tabs">
      <div className="folders-tabs__wrapper">
        {foldersArr}
      </div>
    </div>
  );
}

export default FoldersTabs;
