import { doc, getDoc } from '@firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { UserContext } from '../../context/UserContext';
import { db } from '../../firebaseConfig';
import { User } from '../../types';
import Avatar from '../Avatar/Avatar';
import './ChatInfo.scss';

function ChatInfo() {
  const { activeChatID } = useContext(ActiveChatContext);
  const { userID } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState<User | null>(null);

  const getData = async () => {
    if (activeChatID) {
      const user = await getDoc(doc(db, 'users', userID));
      const userData = user.data() as User;
      setUserInfo(userData);
    }
  };

  useEffect(() => {
    getData();
  }, [activeChatID]);

  return (
    <div className="chat-info">
      <Avatar image={userInfo?.photoURL || ''} />
      <div className="chat-info__info">
        <div className="chat-info__title">{userInfo?.displayName}</div>
        <div className="chat-info__status">Online</div>
      </div>
    </div>
  );
}

export default ChatInfo;
