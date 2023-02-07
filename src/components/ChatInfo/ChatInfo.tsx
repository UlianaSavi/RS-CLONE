import { usersData, groupsData } from '../../fakeData';
import Avatar from '../Avatar/Avatar';
import './ChatInfo.scss';
import type { UserData } from '../../types';

interface ChatInfoProps {
  activeChatId: number,
}

function ChatInfo({ activeChatId }: ChatInfoProps) {
  const data = [...groupsData, ...usersData];

  const activeChat = data.find((item) => item.id === activeChatId) as UserData;

  return (
    <div className="chat-info">
      <Avatar image={activeChat.avatar} />
      <div className="chat-info__info">
        <div className="chat-info__title">{activeChat.name}</div>
        <div className="chat-info__status">Online</div>
      </div>
    </div>
  );
}

export default ChatInfo;
