import Avatar from '../Avatar/Avatar';
import './ChatInfo.scss';

interface ChatInfoProps {
  avatar: string,
  title: string,
  status: string,
}

function ChatInfo({ avatar, title, status }: ChatInfoProps) {
  return (
    <div className="chat-info">
      <Avatar image={avatar} />
      <div className="chat-info__info">
        <div className="chat-info__title">{title}</div>
        <div className="chat-info__status">{status}</div>
      </div>
    </div>
  );
}

export default ChatInfo;
