import { useState } from 'react';
import { foldersData } from '../../fakeData';
import FoldersTabs from '../FoldersTabs/FoldersTabs';
import ChatsList from '../ChatsList/ChatsList';
import './SidebarContent.scss';

interface SidebarContentProps {
  activeChatId: string,
  setActiveChatId: React.Dispatch<React.SetStateAction<string>>
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
        activeChatId={activeChatId}
        setActiveChatId={setActiveChatId}
      />
    </div>
  );
}

export default SidebarContent;
