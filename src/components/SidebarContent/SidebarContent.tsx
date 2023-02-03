import ChatsFolders from '../ChatsFolders/ChatsFolders';
import ChatsList from '../ChatsList/ChatsList';
import './SidebarContent.scss';

function SidebarContent() {
  return (
    <div className="sidebar-content">
      <ChatsFolders />
      <ChatsList />
    </div>
  );
}

export default SidebarContent;
