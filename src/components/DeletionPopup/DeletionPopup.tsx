import { useContext, useEffect, useState } from 'react';
import { doc, getDoc } from '@firebase/firestore';
import { db } from '../../firebaseConfig';
import { deleteChat } from '../../API/api';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import type { User } from '../../types';
import './DeletionPopup.scss';

interface ContextMenuProps {
  isVisible: boolean,
  chatID: string
}

function DeletionPopup({
  isVisible, chatID,
}: ContextMenuProps) {
  const currentUser: User = useContext(AuthContext) as User;
  const { userID, setUserID } = useContext(UserContext);
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
    deleteChat(chatID, currentUser.uid, userID);
    setUserID('');
    setActiveChatID('');
  };

  return (
    <div className={`deletion-popup ${isVisible ? 'active' : ''}`}>
      <div className="deletion-popup__header">Delete chat</div>
      <div className="deletion-popup__description">{`Are you shure you want to delete the chat with ${userData?.displayName}`}</div>
      <button type="button" className="deletion-popup__button" onClick={handleDeleteBtn}>
        CANCEL
      </button>
      <button type="button" className="deletion-popup__button" onClick={handleDeleteBtn}>
        DELETE CHAT
      </button>
    </div>
  );
}

export default DeletionPopup;
