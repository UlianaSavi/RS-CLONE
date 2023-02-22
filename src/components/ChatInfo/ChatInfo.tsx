/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useContext, useEffect, useState } from 'react';
import {
  onSnapshot, doc, getDoc, DocumentData,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { UserContext } from '../../context/UserContext';
import { User } from '../../types';
import Avatar from '../Avatar/Avatar';
import './ChatInfo.scss';
import { convertTimestamp } from '../../hooks/timestampConverter';
import { UserSidebarContext } from '../../context/UserSidebarContext';

function ChatInfo() {
  const { activeChatID } = useContext(ActiveChatContext);
  const { userID } = useContext(UserContext);
  const { userSidebar, setUserSidebar } = useContext(UserSidebarContext);
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [isOnline, setIsOnline] = useState(userInfo?.isOnline || false);
  const [lastSeen, setLastSeen] = useState('');

  const setData = async (data: DocumentData) => {
    setIsOnline(data.isOnline);
    if (!data.isOnline && data.lastVisitAt) {
      setLastSeen(convertTimestamp(data.lastVisitAt));
    }
  };

  const getData = async () => {
    if (activeChatID) {
      const user = await getDoc(doc(db, 'users', userID));
      const data = user.data() as User;
      setUserInfo(data);
      setData(data);
    }
  };
  const FlipFlopUserSidebar = () => {
    setUserSidebar(!userSidebar);
  };

  useEffect(() => {
    getData();
    onSnapshot(doc(db, 'users', userID), (d) => {
      const data = d.data();
      if (!data || !userInfo) return;
      setData(data);
    });
  }, [activeChatID]);

  return (
    <div className="chat-info" onClick={FlipFlopUserSidebar}>
      <Avatar image={userInfo?.photoURL || ''} />
      <div className="chat-info__info">
        <div className="chat-info__title">{userInfo?.displayName}</div>
        <div className="chat-info__status">{isOnline ? 'Online' : `Last seen ${lastSeen}`}</div>
      </div>
    </div>
  );
}

export default ChatInfo;
