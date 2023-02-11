import { useState } from 'react';
import { foldersData } from '../../fakeData';
import FoldersTabs from '../FoldersTabs/FoldersTabs';
import ChatsList from '../ChatsList/ChatsList';
import './SidebarContent.scss';

function SidebarContent() {
  const [activeFolder, setActiveFolder] = useState(0);

  return (
    <div className="sidebar-content">
      <FoldersTabs
        data={foldersData}
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
      />
      <ChatsList activeFolder={activeFolder} />
    </div>
  );
}

export default SidebarContent;
