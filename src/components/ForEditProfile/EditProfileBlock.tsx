import { useContext, useState } from 'react';
import { ArrowLeftIcon, AddPhotoIcon } from '../../assets/icons/icons';
import './EditProfileBlock.scss';
import { SettingsHeaderProps } from '../../types';
import { AuthContext } from '../../context/AuthContext';
import avatarPlaceholder from '../../assets/icons/avatar-placeholder.png';
import type { User } from '../../types';
import FormInput from '../FormInput/FormInput';
import { changeProfileName, changeProfilePhoto } from '../../API/api';

export default function EditProfileBlock({ handleEditClick }: SettingsHeaderProps) {
  const currentUser: User = useContext(AuthContext) as User;
  const [name, setName] = useState(currentUser.displayName);
  const [user, setUser] = useState(currentUser);
  const [bio, setBio] = useState('');

  return (
    <div className="edit-profile">
      <div className="header">
        <button
          type="button"
          className="header__arrow"
          onClick={() => {
            handleEditClick();
            changeProfileName(user.displayName);
            currentUser.displayName = user.displayName;
          }}
        >
          <ArrowLeftIcon />
        </button>
        <h3 className="header__text">Edit Profile</h3>
      </div>
      <section className="edit-user-info">
        <div className="edit-user-info__img">
          <img className="edit-user-info__ava" src={currentUser.photoURL !== null ? currentUser.photoURL : avatarPlaceholder} alt="User" />
          <button type="button" className="edit-user-info__add-photo-btn">
            <AddPhotoIcon />
            <input
              type="file"
              className="edit-user-info__input-file"
              accept=".jpg, .jpeg, .png"
              onChange={(event) => {
                changeProfilePhoto(user.displayName, event.target.files).then((url) => {
                  if (url) {
                    setUser({ ...user, photoURL: url });
                  }
                });
              }}
            />
          </button>
        </div>
        <FormInput type="text" id="name" label="Name" value={name.split(',')[0]} setValue={setName} />
        <FormInput type="text" id="last-name" label="Last Name" value={name.split(',').length > 1 ? name.split(',')[1] : ''} setValue={setName} />
        <FormInput type="text" id="bio" label="Bio (optional)" value={bio} setValue={setBio} />
      </section>
      <div className="edit-user-info__descr">
        Any details such as age, occupation or city.
        <br />
        Example: 23 y.o. designer from San Francisco
      </div>
    </div>
  );
}
