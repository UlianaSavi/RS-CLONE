import ChatList from '../ChatList/ChatList';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import './Sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <ChatList />
    </div>
  );
}

export default Sidebar;
