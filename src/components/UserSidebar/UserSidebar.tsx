import Gallery from '../Gallery/Gallery';
import UserSidebarHeader from '../UserSidebarHeader/UserSidebarHeader';
import UserSidebarInfo from '../UserSidebarInfo/UserSidebarInfo';
import './UserSidebar.scss';

function UserSidebar() {
  return (
    <div className="user-sidebar">
      <UserSidebarHeader />
      <UserSidebarInfo />
      <Gallery />
    </div>
  );
}

export default UserSidebar;
