import { useState } from 'react';
import { usersData, chatsData } from '../../fakeData';
import FoldersTabs from '../FoldersTabs/FoldersTabs';
import ChatsList from '../ChatsList/ChatsList';
import './SidebarContent.scss';

function SidebarContent() {
  const foldersData = [
    {
      title: 'All',
      unreadConversations: 3,
      content: [...chatsData, ...usersData],
    },
    {
      title: 'Contacts',
      unreadConversations: 2,
      content: usersData,
    },
    {
      title: 'Chats',
      unreadConversations: 1,
      content: chatsData,
    },
  ];

  const [activeFolder, setActiveFolder] = useState(0);

  return (
    <div className="sidebar-content">
      <FoldersTabs
        data={foldersData}
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
      />
      <ChatsList data={foldersData[activeFolder].content} />
    </div>
  );
}

export default SidebarContent;
