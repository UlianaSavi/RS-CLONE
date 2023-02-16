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
  userID: string
}

function DeletionPopup({
  isVisible, setVisibility, userID,
}: ContextMenuProps) {
  const currentUser: User = useContext(AuthContext) as User;
  const { setUserID } = useContext(UserContext);
  const [userData, setUserData] = useState<User | null>(null);
  const { setActiveChatID } = useContext(ActiveChatContext);

  const getUserData = async () => {
    if (userID) {
      const user = await getDoc(doc(db, 'users', userID));
      const data = user.data() as User;
      setUserData(data);
    }
  };

  useEffect(() => {
    getUserData();
  }, [userID]);

  const handleDeleteBtn = () => {
    const combinedID = currentUser.uid > userID ? `${currentUser.uid}${userID}` : `${userID}${currentUser.uid}`;
    deleteChat(combinedID, currentUser.uid, userID);
    setVisibility(false);
    setUserID('');
    setActiveChatID('');
  };

  const closePopup = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.deletion-popup')) {
      setVisibility(false);
    }
  };

  return (
    <div className={`${isVisible ? 'deletion-popup__background' : ''}`} onClick={closePopup}>
      <div className={`deletion-popup ${isVisible ? 'active' : ''}`}>
        <div className="deletion-popup__header-wrapper">
          <Avatar image={userData?.photoURL || ''} />
          <h2 className="deletion-popup__header">Delete chat</h2>
        </div>
        <div className="deletion-popup__description">
          {`Are you shure you want to delete the chat with ${userData?.displayName}?`}
        </div>
        <div className="deletion-popup__buttons-wrapper">
          <button
            type="button"
            className="deletion-popup__button"
            onClick={() => setVisibility(false)}
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
