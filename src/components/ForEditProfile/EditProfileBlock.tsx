import { useContext } from 'react';
import { ArrowLeftIcon } from '../../assets/icons/icons';
import './EditProfileBlock.scss';
import { SettingsHeaderProps } from '../../types';
import { AuthContext } from '../../context/AuthContext';
import avatarPlaceholder from '../../assets/icons/avatar-placeholder.png';
import type { User } from '../../types';

export default function EditProfileBlock({ handleEditClick }: SettingsHeaderProps) {
  const currentUser: User = useContext(AuthContext) as User;
  return (
    <div className="edit-profile">
      <div className="header">
        <button type="button" className="header__arrow" onClick={handleEditClick}>
          <ArrowLeftIcon />
        </button>
        <h3 className="header__text">Edit profile</h3>
      </div>
      <section className="edit-user-info">
        <div className="edit-user-info__img">
          <img className="edit-user-info__ava" src={currentUser.photoURL !== null ? currentUser.photoURL : avatarPlaceholder} alt="User" />
        </div>
        <div className="edit-uer-info__first-name">
          <input type="text" placeholder={currentUser.displayName} />
        </div>
        <div className="edit-user-info__last-name">
          <input type="text" placeholder="Last name" />
        </div>
        <div className="edit-user-info__bio">
          <input type="text" placeholder="Bio" />
        </div>
        <div className="edit-user-info__descr">
          Any details such as age, occupation or city.
          Example: 23 y.o. designer from San Francisco
        </div>
      </section>
      <section className="edit-username">
        <span>Username</span>
        <div className="edit-username__username">
          <input type="text" placeholder="username" />
        </div>
        <div className="edit-username__descr">
          You can choose a username on Telegram. If you do, people will be able to find you by this username and contact you without needing your phone number.You can use a–z, 0–9 and underscores. Minimum length is 5 characters.This link opens a chat with you:https://t.me/winiceame
        </div>
      </section>
    </div>
  );
}
