import { useContext, useEffect, useState } from 'react';
import {
  collection, query, getDocs, DocumentData, where,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { ArrowLeftIcon } from '../../assets/icons/icons';
import FormInput from '../FormInput/FormInput';
import AddPhotoButton from '../AddPhotoButton/AddPhotoButton';
import './EditGroupInfo.scss';
import { changeGroupPhoto } from '../../API/api';
import Avatar from '../Avatar/Avatar';
import { SelectedUsersContext } from '../../context/SelectedUsersContext';
import { AuthContext } from '../../context/AuthContext';
import { convertTimestamp } from '../../hooks/timestampConverter';

interface EditGroupInfoProps {
  groupName: string,
  setGroupName: React.Dispatch<React.SetStateAction<string>>,
  groupPhoto: string,
  setGroupPhoto: React.Dispatch<React.SetStateAction<string>>,
  handleBackClick: () => void
}

export default function EditGroupInfo({
  handleBackClick, groupName, setGroupName, groupPhoto, setGroupPhoto,
}: EditGroupInfoProps) {
  const changePhoto = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const photoUrl = await changeGroupPhoto(event.target.files);
    setGroupPhoto(photoUrl);
  };

  const { selectedUsers } = useContext(SelectedUsersContext);
  const [usersArr, setUsersArr] = useState<JSX.Element[] | undefined>([]);
  const { currentUser } = useContext(AuthContext);

  const getUsersData = async () => {
    if (currentUser) {
      const usersData: DocumentData[] = [];
      const q = query(collection(db, 'users'), where('uid', '!=', currentUser.uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((d) => {
        const user = d.data();
        if (selectedUsers.includes(user.uid)) {
          usersData.push(user);
        }
      });

      setUsersArr(usersData
        .map((user: DocumentData) => {
          const lastSeen = convertTimestamp(user.lastVisitAt);
          return (
            <button type="button" className="chat-preview" key={user.uid}>
              <div className="chat-preview-wrapper">
                <Avatar image={user.photoURL} />
                <div className="chat-preview-text">
                  <div className="chat-preview__title">{user.displayName}</div>
                  <div className="chat-preview__online-status">{user.isOnline ? 'online' : `last seen ${lastSeen}`}</div>
                </div>
              </div>
            </button>
          );
        }));
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div className="edit-group">
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
      <section className="edit-group__info">
        <AddPhotoButton handleChange={changePhoto} imageSrc={groupPhoto} />
        <FormInput type="text" id="name" label="Group Name" value={groupName} setValue={setGroupName} mode="edit" />
      </section>
      <section className="edit-group__users-list-wrapper">
        <div className="edit-group__users-count">
          {`${usersArr?.length} members`}
        </div>
        <div className="edit-group__users-list">
          {usersArr}
        </div>
      </section>
    </div>
  );
}
