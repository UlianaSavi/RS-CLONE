import { useContext } from 'react';
import { CloseIcon } from '../../assets/icons/icons';
import { UserSidebarContext } from '../../context/UserSidebarContext';
import './UserSidebarHeader.scss';

function UserSidebarHeader() {
  const { userSidebar, setUserSidebar } = useContext(UserSidebarContext);
  const closeUserSidebar = () => {
    setUserSidebar(!userSidebar);
  };

  return (
    <div className="user-sidebar__header">
      <CloseIcon callback={closeUserSidebar} />
      <div className="user-sidebar__header__title"><span>Profile</span></div>
    </div>
  );
}

export default UserSidebarHeader;
