import { useContext, useEffect, useState } from 'react';
import {
  doc,
  DocumentData,
  getDoc,
  onSnapshot,
} from '@firebase/firestore';
import type { User } from '../../types';
import avatarPlaceholder from '../../assets/icons/avatar-placeholder.png';
import { InfoIcon, NameUserIcon } from '../../assets/icons/icons';
import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import './UserSidebarInfo.scss';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { UserContext } from '../../context/UserContext';
import { convertTimestamp } from '../../hooks/timestampConverter';
import { db } from '../../firebaseConfig';

function UserSidebarInfo() {
  const { activeChatID } = useContext(ActiveChatContext);
  const { userID } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [groupInfo, setGroupInfo] = useState<DocumentData | null>(null);
  const [isOnline, setIsOnline] = useState(userInfo?.isOnline || false);
  const [lastSeen, setLastSeen] = useState('');

  const setData = async (data: DocumentData) => {
    if (activeChatID !== userID) {
      setIsOnline(data.isOnline);
      if (!data.isOnline && data.lastVisitAt) {
        setLastSeen(convertTimestamp(data.lastVisitAt));
      }
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

  useEffect(() => {
    if (activeChatID !== userID) {
      getData();
      onSnapshot(doc(db, 'users', userID), (d) => {
        const data = d.data();
        if (!data || !userInfo) return;
        setData(data);
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
    <div className="user-sidebar-info">
      <div className="user-sidebar-info__wrapper">
        <img
          className="user-sidebar-info__wrapper__ava"
          src={(activeChatID !== userID ? userInfo?.photoURL : groupInfo?.photoURL)
            || avatarPlaceholder}
          alt="User"
        />
        <div className="user-sidebar-info__wrapper__name">{activeChatID !== userID ? userInfo?.displayName : groupInfo?.name}</div>
        <div className="user-sidebar-info__wrapper__status">
          {activeChatID !== userID ? onlineStatus : `${groupInfo?.members.reduce((acc: number, curr: number) => {
            if (Object.values(curr)[0]) {
              return acc + 1;
            }
            return acc;
          }, 0)} members`}
        </div>
      </div>
      <div className="user-sidebar-info__item">
        <PopupMenuItem
          label={activeChatID !== userID ? userInfo?.email : 'This is group chat'}
          icon={<NameUserIcon />}
          title={activeChatID !== userID ? 'Email' : 'Info'}
        />
      </div>
      <div className="user-sidebar-info__item">
        <PopupMenuItem
          label={activeChatID !== userID ? userInfo?.displayName : groupInfo?.name}
          icon={<NameUserIcon />}
          title={activeChatID !== userID ? 'Username' : 'Pulic name'}
        />
      </div>
      {activeChatID !== userID && (
        <div className="user-sidebar-info__item">
          <PopupMenuItem
            label={userInfo?.bio || 'About'}
            icon={<InfoIcon />}
            title="About"
          />
        </div>
      )}
    </div>
  );
}

export default UserSidebarInfo;
