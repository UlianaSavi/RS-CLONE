/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, useEffect, useState } from 'react';
import { doc, getDoc, DocumentData } from '@firebase/firestore';
import { db } from '../../firebaseConfig';
import { deleteChat } from '../../API/api';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import './DeletionPopup.scss';
import Avatar from '../Avatar/Avatar';

interface ContextMenuProps {
  isVisible: boolean,
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>,
  userIdToDelete: string
}

function DeletionPopup({
  isVisible, setVisibility, userIdToDelete,
}: ContextMenuProps) {
  const { currentUser } = useContext(AuthContext);
  const { userID, setUserID } = useContext(UserContext);
  const [userData, setUserData] = useState<DocumentData | null | undefined>(null);
  const { setActiveChatID } = useContext(ActiveChatContext);
  const [checked, setChecked] = useState(false);
  const [isGroup, setIsGroup] = useState(false);
  const [isAdmin, setAsAdmin] = useState(false);

  const getUserData = async () => {
    setUserData(null);
    setAsAdmin(false);
    setIsGroup(false);
    if (userIdToDelete) {
      const user = await getDoc(doc(db, 'users', userIdToDelete));
      const data = user.data();
      if (data) {
        setUserData(data);
      } else {
        setIsGroup(true);
        const group = await getDoc(doc(db, 'chats', userIdToDelete));
        const groupData = group.data();
        setUserData(groupData);
        if (currentUser?.uid === groupData?.admin) {
          setAsAdmin(true);
        }
      }
    }
  };

  useEffect(() => {
    getUserData();
  }, [userIdToDelete]);

  const closePopup = () => {
    setVisibility(false);
    setChecked(false);
  };

  const handleDeleteBtn = () => {
    if (currentUser) {
      if (!isGroup) {
        const combinedID = (currentUser.uid) > userIdToDelete ? `${currentUser.uid}${userIdToDelete}` : `${userIdToDelete}${currentUser.uid}`;
        deleteChat(combinedID, currentUser.uid, userIdToDelete, checked);
        closePopup();
        if (userIdToDelete === userID) {
          setUserID('');
          setActiveChatID('');
        }
      }
    }
  };

  const handleBg = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.deletion-popup')) {
      closePopup();
    }
  };

  const hanldeCheckbox = () => setChecked(!checked);

  return (
    <div className={`${isVisible ? 'deletion-popup__background' : ''}`} onClick={handleBg}>
      <div className={`deletion-popup ${isVisible ? 'active' : ''}`}>
        <div className="deletion-popup__header-wrapper">
          <Avatar image={userData?.photoURL || ''} />
          <h2 className="deletion-popup__header">{isGroup ? 'Delete group' : 'Delete chat'}</h2>
        </div>
        <div className="deletion-popup__description">
          {isGroup
            ? `Are you sure you want to delete and leave the group ${userData?.name}?`
            : `Are you sure you want to delete the chat with ${userData?.displayName}?`}
        </div>
        {!isGroup || isAdmin ? (
          <div className="deletion-popup__checkbox-wrapper">
            <input
              type="checkbox"
              id="delete-options"
              checked={checked}
              onChange={hanldeCheckbox}
            />
            <label htmlFor="delete-options">
              {isGroup
                ? 'Delete for all members'
                : `Also delete for ${userData?.displayName}`}
            </label>
          </div>
        ) : null}
        <div className="deletion-popup__buttons-wrapper">
          <button
            type="button"
            className="deletion-popup__button"
            onClick={closePopup}
          >
            CANCEL
          </button>
          <button
            type="button"
            className="deletion-popup__button delete"
            onClick={handleDeleteBtn}
          >
            {isGroup ? 'DELETE GROUP' : 'DELETE CHAT'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletionPopup;
