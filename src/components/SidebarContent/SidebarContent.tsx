/* eslint-disable no-undef */
import { useState } from 'react';
import { usersData, chatsData } from '../../fakeData';
import FoldersTabs from '../FoldersTabs/FoldersTabs';
import ChatsList from '../ChatsList/ChatsList';
import './SidebarContent.scss';

interface SidebarContentProps {
  activeChat: number,
  setActiveChat: React.Dispatch<React.SetStateAction<number>>
}

function SidebarContent({ activeChat, setActiveChat }: SidebarContentProps) {
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
      <ChatsList
        data={foldersData[activeFolder].content}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
      />
    </div>
  );
}

export default SidebarContent;
