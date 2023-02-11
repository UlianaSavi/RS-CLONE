import { useContext } from 'react';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import Avatar from '../Avatar/Avatar';
import './ChatInfo.scss';

function ChatInfo() {
  const { activeChatID } = useContext(ActiveChatContext);
  console.log('chatID', activeChatID);

  return (
    <div className="chat-info">
      <Avatar image="" />
      <div className="chat-info__info">
        <div className="chat-info__title">User</div>
        <div className="chat-info__status">Online</div>
      </div>
    </div>
  );
}

export default ChatInfo;
