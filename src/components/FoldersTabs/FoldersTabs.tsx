import { useState } from 'react';
import ChatsFolderItem from '../ChatsFolderItem/ChatsFolderItem';
import './FoldersTabs.scss';

function FoldersTabs() {
  const foldersData = [
    {
      title: 'All',
      unreadConversations: 3,
    },
    {
      title: 'Contacts',
      unreadConversations: 2,
    },
    {
      title: 'Chats',
      unreadConversations: 1,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const foldersArr = foldersData
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
