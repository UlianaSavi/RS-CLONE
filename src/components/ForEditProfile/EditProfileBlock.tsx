import { useContext, useEffect, useState } from 'react';
import { ArrowLeftIcon } from '../../assets/icons/icons';
import './EditProfileBlock.scss';
import { SettingsHeaderProps } from '../../types';
import { AuthContext } from '../../context/AuthContext';
import type { User } from '../../types';
import FormInput from '../FormInput/FormInput';
import { changeProfileName, changeProfilePhoto } from '../../API/api';
import AddPhotoButton from '../AddPhotoButton/AddPhotoButton';

export default function EditProfileBlock({ handleEditClick }: SettingsHeaderProps) {
  const currentUser: User = useContext(AuthContext) as User;
  const [name, setName] = useState(currentUser.displayName);
  const [user, setUser] = useState(currentUser);
  const [lastName, setLastName] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    setUser(user);
  }, [name, currentUser.photoURL]);

  const changePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeProfilePhoto(user.displayName, event.target.files).then((url) => {
      if (url) {
        setUser({ ...user, photoURL: url });
      }
    });
  };

  return (
    <div className="edit-profile">
      <div className="header">
        <button
          type="button"
          className="header__arrow"
          onClick={() => {
            handleEditClick();
            changeProfileName(name);
            currentUser.displayName = name;
          }}
        >
          <ArrowLeftIcon />
        </button>
        <h3 className="header__text">Edit Profile</h3>
      </div>
      <section className="edit-user-info">
        <AddPhotoButton handleChange={changePhoto} imageSrc={user.photoURL} />
        <FormInput type="text" id="name" label="Username" value={name} setValue={setName} mode="edit" />
        <FormInput type="text" id="last-name" label="Last Name" value={lastName} setValue={setLastName} mode="edit" />
        <FormInput type="text" id="bio" label="Bio (optional)" value={bio} setValue={setBio} mode="edit" />
      </section>
      <div className="edit-user-info__descr">
        Any details such as age, occupation or city.
        <br />
        Example: 23 y.o. designer from San Francisco
      </div>
    </div>
  );
}
