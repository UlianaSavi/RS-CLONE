import { useState } from 'react';
import { foldersData } from '../../fakeData';
import FoldersTabs from '../FoldersTabs/FoldersTabs';
import ChatsList from '../ChatsList/ChatsList';
import './SidebarContent.scss';

interface SidebarContentProps {
  isSearchMode: boolean,
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>,
}

function SidebarContent({ isSearchMode, setSearchMode }: SidebarContentProps) {
  const [activeFolder, setActiveFolder] = useState(0);

  return (
    <div className="sidebar-content">
      {!isSearchMode && (
      <FoldersTabs
        data={foldersData}
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
      />
      )}
      <ChatsList
        isSearchMode={isSearchMode}
        activeFolder={activeFolder}
        setSearchMode={setSearchMode}
      />
    </div>
  );
}

export default SidebarContent;
