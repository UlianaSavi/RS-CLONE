import { usersData, groupsData } from '../../fakeData';
import Avatar from '../Avatar/Avatar';
import './ChatInfo.scss';

interface ChatInfoProps {
  activeChat: number,
}

function ChatInfo({ activeChat }: ChatInfoProps) {
  const data = [...groupsData, ...usersData];

  return (
    <div className="chat-info">
      <Avatar image={data[activeChat].avatar} />
      <div className="chat-info__info">
        <div className="chat-info__title">{data[activeChat].name}</div>
        <div className="chat-info__status">{data[activeChat].name}</div>
      </div>
    </div>
  );
}

export default ChatInfo;
