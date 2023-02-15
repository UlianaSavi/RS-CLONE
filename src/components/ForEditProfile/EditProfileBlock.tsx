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
        <form className="edit-user-info__input-wrapper" id="first-name">
          <input type="text" value={currentUser.displayName} className="edit-user-info__input" placeholder="First Name" />
          <label htmlFor="first-name" className="edit-user-info__label">First name (required)</label>
        </form>
        <form className="edit-user-info__input-wrapper" id="last-name">
          <input type="text" placeholder="Last name" className="edit-user-info__input" />
          <label htmlFor="last-name" className="edit-user-info__label">Last name (optional)</label>
        </form>
        <form className="edit-user-info__input-wrapper" id="bio">
          <input type="text" placeholder="Bio" className="edit-user-info__input" />
          <label htmlFor="bio" className="edit-user-info__label">Bio</label>
          <div className="edit-user-info__max-length">70</div>
        </form>
        <div className="edit-user-info__descr">
          Any details such as age, occupation or city.
          <br />
          Example: 23 y.o. designer from San Francisco
        </div>
      </section>
    </div>
  );
}
