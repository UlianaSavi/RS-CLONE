import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import type { User } from '../../types';
import Avatar from '../Avatar/Avatar';
import './ChatInfo.scss';

function ChatInfo() {
  const currentUser: User = useContext(AuthContext) as User;
  return (
    <div className="chat-info">
      <Avatar image={currentUser.photoURL} />
      <div className="chat-info__info">
        <div className="chat-info__title">{currentUser.displayName}</div>
        <div className="chat-info__status">Online</div>
      </div>
    </div>
  );
}

export default ChatInfo;
