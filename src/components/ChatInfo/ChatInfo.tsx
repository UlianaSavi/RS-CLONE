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
  const [test, setTest] = useState<User | null>(null);

  const getData = async () => {
    const user = await getDoc(doc(db, 'users', userID));
    const userData = user.data() as User;
    setTest(userData);
  };

  useEffect(() => {
    getData();
  }, [activeChatID]);

  return (
    <div className="chat-info">
      <Avatar image={test?.photoURL || ''} />
      <div className="chat-info__info">
        <div className="chat-info__title">{test?.displayName}</div>
        <div className="chat-info__status">Online</div>
      </div>
    </div>
  );
}

export default ChatInfo;
