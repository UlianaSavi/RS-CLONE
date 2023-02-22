import UserSidebarHeader from '../UserSidebarHeader/UserSidebarHeader';
import UserSidebarInfo from '../UserSidebarInfo/UserSidebarInfo';
import './UserSidebar.scss';

function UserSidebar() {
  return (
    <div className="user-sidebar">
      <UserSidebarHeader />
      <UserSidebarInfo />
    </div>
  );
}

export default UserSidebar;
