/* eslint-disable no-undef */
import { useState } from 'react';
import { foldersData } from '../../fakeData';
import FoldersTabs from '../FoldersTabs/FoldersTabs';
import ChatsList from '../ChatsList/ChatsList';
import './SidebarContent.scss';

interface SidebarContentProps {
  activeChat: number,
  setActiveChat: React.Dispatch<React.SetStateAction<number>>
}

function SidebarContent({ activeChat, setActiveChat }: SidebarContentProps) {
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
