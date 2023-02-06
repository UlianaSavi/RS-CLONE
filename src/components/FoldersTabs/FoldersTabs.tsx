import { useState } from 'react';
import ChatsFolderItem from '../ChatsFolderItem/ChatsFolderItem';
import './FoldersTabs.scss';

interface FoldersTabsProps {
  data: {
    title: string,
    unreadConversations: number
  }[],
}

function FoldersTabs({ data }: FoldersTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const foldersArr = data
    .map((folder, index) => (
      <ChatsFolderItem
        key={folder.title}
        data={folder}
        isActive={index === activeIndex}
        setActiveIndex={setActiveIndex}
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
