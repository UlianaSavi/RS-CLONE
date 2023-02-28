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
import { convertTimestamp } from '../../hooks/timestampConverter';
import { UserSidebarContext } from '../../context/UserSidebarContext';
import './ChatInfo.scss';

function ChatInfo() {
  const { activeChatID } = useContext(ActiveChatContext);
  const { userID } = useContext(UserContext);
  const { userSidebar, setUserSidebar } = useContext(UserSidebarContext);
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [groupInfo, setGroupInfo] = useState<DocumentData | null>(null);
  const [isOnline, setIsOnline] = useState(userInfo?.isOnline || false);
  const [lastSeen, setLastSeen] = useState('');

  const setUserData = async (data: DocumentData) => {
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
      setUserData(data);
    }
  };
  const FlipFlopUserSidebar = () => {
    setUserSidebar(!userSidebar);
  };

  useEffect(() => {
    if (activeChatID !== userID) {
      getData();
      onSnapshot(doc(db, 'users', userID), (d) => {
        const data = d.data();
        if (!data || !userInfo) return;
        setUserData(data);
      });
    } else {
      onSnapshot(doc(db, 'chats', userID), (d) => {
        const data = d.data();
        if (!data) return;
        setGroupInfo(data);
      });
    }
  }, [activeChatID]);

  const onlineStatus = isOnline ? 'online' : `last seen ${lastSeen}`;

  return (
    <div className="chat-info" onClick={FlipFlopUserSidebar}>
      <Avatar image={(activeChatID !== userID ? userInfo?.photoURL : groupInfo?.photoURL) || ''} />
      <div className="chat-info__info">
        <div className="chat-info__title">
          {activeChatID !== userID ? userInfo?.displayName : groupInfo?.name}
        </div>
        <div className={`chat-info__status ${isOnline && activeChatID !== userID ? 'online' : ''}`}>
          {activeChatID !== userID ? onlineStatus : `${groupInfo?.members.reduce((acc: number, curr: number) => {
            if (Object.values(curr)[0]) {
              return acc + 1;
            }
            return acc;
          }, 0)} members`}
        </div>
      </div>
    </div>
  );
}

export default ChatInfo;
