import Avatar from '../Avatar/Avatar';
import './ChatInfo.scss';

function ChatInfo() {
  return (
    <div className="chat-info">
      <Avatar />
      <div className="chat-info__info">
        <div className="chat-info__title">Title</div>
        <div className="chat-info__status">Online</div>
      </div>
    </div>
  );
}

export default ChatInfo;
