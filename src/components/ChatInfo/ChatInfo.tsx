import { useContext, useEffect, useState } from 'react';
import {
  onSnapshot, doc, getDoc,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { UserContext } from '../../context/UserContext';
import { User } from '../../types';
import Avatar from '../Avatar/Avatar';
import './ChatInfo.scss';
import { convertTimestamp } from '../../hooks/timestampConverter';

function ChatInfo() {
  const { activeChatID } = useContext(ActiveChatContext);
  const { userID } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [isOnline, setIsOnline] = useState(userInfo?.isOnline || false);

  const getData = async () => {
    if (activeChatID) {
      const user = await getDoc(doc(db, 'users', userID));
      const userData = user.data() as User;
      setUserInfo(userData);
    }
  };

  useEffect(() => {
    getData();
    onSnapshot(doc(db, 'users', userID), (d) => {
      const data = d.data();
      if (!data) return;
      setIsOnline(data.isOnline);
    });
  }, [activeChatID]);

  const lastSeen = userInfo && !userInfo.isOnline ? convertTimestamp(userInfo.lastVisitAt) : '';

  return (
    <div className="chat-info">
      <Avatar image={userInfo?.photoURL || ''} />
      <div className="chat-info__info">
        <div className="chat-info__title">{userInfo?.displayName}</div>
        <div className="chat-info__status">{isOnline ? 'Online' : `Last seen ${lastSeen}`}</div>
      </div>
    </div>
  );
}

export default ChatInfo;
