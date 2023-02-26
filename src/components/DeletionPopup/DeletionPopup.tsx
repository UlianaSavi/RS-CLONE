/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, useEffect, useState } from 'react';
import { doc, getDoc } from '@firebase/firestore';
import { db } from '../../firebaseConfig';
import { deleteChat } from '../../API/api';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import type { User } from '../../types';
import './DeletionPopup.scss';
import Avatar from '../Avatar/Avatar';

interface ContextMenuProps {
  isVisible: boolean,
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>,
  userIdUnderRMK: string
}

function DeletionPopup({
  isVisible, setVisibility, userIdUnderRMK,
}: ContextMenuProps) {
  const { currentUser } = useContext(AuthContext);
  const { userID, setUserID } = useContext(UserContext);
  const [userData, setUserData] = useState<User | null>(null);
  const { setActiveChatID } = useContext(ActiveChatContext);
  const [checked, setChecked] = useState(false);

  const getUserData = async () => {
    if (userIdUnderRMK) {
      const user = await getDoc(doc(db, 'users', userIdUnderRMK));
      const data = user.data() as User;
      setUserData(data);
    }
  };

  useEffect(() => {
    getUserData();
  }, [userIdUnderRMK]);

  const closePopup = () => {
    setVisibility(false);
    setChecked(false);
  };

  const handleDeleteBtn = () => {
    if (currentUser) {
      const combinedID = (currentUser.uid) > userIdUnderRMK ? `${currentUser.uid}${userIdUnderRMK}` : `${userIdUnderRMK}${currentUser.uid}`;
      deleteChat(combinedID, currentUser.uid, userIdUnderRMK, checked);
      closePopup();
      if (userIdUnderRMK === userID) {
        setUserID('');
        setActiveChatID('');
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
          <h2 className="deletion-popup__header">Delete chat</h2>
        </div>
        <div className="deletion-popup__description">
          {`Are you sure you want to delete the chat with ${userData?.displayName}?`}
        </div>
        <div className="deletion-popup__checkbox-wrapper">
          <input
            type="checkbox"
            id="delete-options"
            checked={checked}
            onChange={hanldeCheckbox}
          />
          <label htmlFor="delete-options">
            {`Also delete for ${userData?.displayName}`}
          </label>
        </div>
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
            DELETE CHAT
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletionPopup;
