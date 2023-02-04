import FoldersTabs from '../FoldersTabs/FoldersTabs';
import ChatsList from '../ChatsList/ChatsList';
import './SidebarContent.scss';

function SidebarContent() {
  return (
    <div className="sidebar-content">
      <FoldersTabs />
      <ChatsList />
    </div>
  );
}

export default SidebarContent;
