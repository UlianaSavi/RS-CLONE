import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import avatarPlaceholder from '../../../assets/icons/avatar-placeholder.png';

import { AddPhotoIcon, InfoIcon, NameUserIcon } from '../../../assets/icons/icons';
import PopupMenuItem from '../../PopupMenuItem/PopupMenuItem';
import './UserInfo.scss';
import { changeProfilePhoto } from '../../../API/api';

function UserInfo() {
  const { currentUser, userFull } = useContext(AuthContext);
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(user);
  }, [currentUser?.photoURL]);

  return (
    <div className="user-info">
      <div className="user-info__wrapper">
        <img className="user-info__wrapper__ava" src={user?.photoURL || avatarPlaceholder} alt="User" />
        <div className="user-info__wrapper__name">{currentUser?.displayName}</div>
        <div className="user-info__wrapper__status">{userFull?.isOnline || 'online'}</div>
        <button type="button" className="icon-button">
          <AddPhotoIcon />
          <input
            type="file"
            className="icon-button__input-file"
            accept=".jpg, .jpeg, .png"
            onChange={(event) => {
              changeProfilePhoto(user?.displayName || '', event.target.files).then((url) => {
                if (url && user) {
                  setUser({ ...user, photoURL: url });
                }
              });
            }}
          />
        </button>
      </div>
      <div className="user-info__item">
        <PopupMenuItem label={currentUser?.email || ''} icon={<NameUserIcon />} title="Email" />
      </div>
      <div className="user-info__item">
        <PopupMenuItem label={currentUser?.displayName || ''} icon={<NameUserIcon />} title="Username" />
      </div>
      <div className="user-info__item">
        <PopupMenuItem label={userFull?.bio || 'About'} icon={<InfoIcon />} title="About" />
      </div>
    </div>
  );
}

export default UserInfo;
