import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import type { User } from '../../types';
import avatarPlaceholder from '../../assets/icons/avatar-placeholder.png';
import { InfoIcon, NameUserIcon } from '../../assets/icons/icons';
import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import './UserSidebarInfo.scss';

function UserSidebarInfo() {
  const currentUser: User = useContext(AuthContext) as User;
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(user);
  }, [currentUser.photoURL]);

  return (
    <div className="user-sidebar-info">
      <div className="user-sidebar-info__wrapper">
        <img className="user-sidebar-info__wrapper__ava" src={user.photoURL || avatarPlaceholder} alt="User" />
        <div className="user-sidebar-info__wrapper__name">{currentUser.displayName}</div>
        <div className="user-sidebar-info__wrapper__status">{currentUser.isOnline || 'online'}</div>
      </div>
      <div className="user-sidebar-info__item">
        <PopupMenuItem label={currentUser.email} icon={<NameUserIcon />} title="Email" />
      </div>
      <div className="user-sidebar-info__item">
        <PopupMenuItem label={currentUser.displayName} icon={<NameUserIcon />} title="Username" />
      </div>
      <div className="user-sidebar-info__item">
        <PopupMenuItem label="About me info" icon={<InfoIcon />} title="About" />
      </div>
    </div>
  );
}

export default UserSidebarInfo;
