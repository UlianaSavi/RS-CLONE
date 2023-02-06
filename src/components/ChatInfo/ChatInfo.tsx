import Avatar from '../Avatar/Avatar';
import './ChatInfo.scss';

function ChatInfo() {
  return (
    <div className="chat-info">
      <Avatar image="https://i.pinimg.com/564x/9e/c3/9f/9ec39f56b00c97ab0ef3a99817b27f87.jpg" />
      <div className="chat-info__info">
        <div className="chat-info__title">Title</div>
        <div className="chat-info__status">Online</div>
      </div>
    </div>
  );
}

export default ChatInfo;
