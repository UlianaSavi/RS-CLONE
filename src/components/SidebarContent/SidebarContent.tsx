import { useState } from 'react';
import { foldersData } from '../../fakeData';
import FoldersTabs from '../FoldersTabs/FoldersTabs';
import ChatsList from '../ChatsList/ChatsList';
import './SidebarContent.scss';

interface SidebarContentProps {
  activeChatId: number,
  setActiveChatId: React.Dispatch<React.SetStateAction<number>>
}

function SidebarContent({ activeChatId, setActiveChatId }: SidebarContentProps) {
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
        activeChatId={activeChatId}
        setActiveChatId={setActiveChatId}
      />
    </div>
  );
}

export default SidebarContent;
