import { useContext, useEffect, useState } from 'react';
import { ArrowLeftIcon } from '../../assets/icons/icons';
import { AuthContext } from '../../context/AuthContext';
import type { User } from '../../types';
import FormInput from '../FormInput/FormInput';
import AddPhotoButton from '../AddPhotoButton/AddPhotoButton';
import './EditGroupInfo.scss';

interface EditGroupInfoProps {
  groupName: string,
  setGroupName: React.Dispatch<React.SetStateAction<string>>,
  handleBackClick: () => void
}

export default function EditGroupInfo({
  handleBackClick, groupName, setGroupName,
}: EditGroupInfoProps) {
  const currentUser: User = useContext(AuthContext) as User;
  const [groupPhoto, setGroupPhoto] = useState('');

  useEffect(() => {
    console.log('');
  }, [currentUser.photoURL]);

  const changePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    // changeProfilePhoto(user.displayName, event.target.files).then((url) => {
    //   if (url) {
    //     setUser({ ...user, photoURL: url });
    //   }
    // });
    console.log(event);
    setGroupPhoto('');
  };

  return (
    <div className="edit-profile">
      <div className="header">
        <button
          type="button"
          className="header__arrow"
          onClick={handleBackClick}
        >
          <ArrowLeftIcon />
        </button>
        <h3 className="header__text">New Group</h3>
      </div>
      <section className="edit-user-info">
        <AddPhotoButton handleChange={changePhoto} imageSrc={groupPhoto} />
        <FormInput type="text" id="name" label="Group Name" value={groupName} setValue={setGroupName} mode="edit" />
      </section>
    </div>
  );
}
