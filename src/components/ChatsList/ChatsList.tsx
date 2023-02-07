/* eslint-disable no-undef */
import ChatPreview from '../ChatPreview/ChatPreview';
import type { UserData } from '../../types';
import './ChastList.scss';

interface ChatsListProps {
  data: UserData[],
  activeChatId: number,
  setActiveChatId: React.Dispatch<React.SetStateAction<number>>
}

function ChatsList({ data, activeChatId, setActiveChatId }: ChatsListProps) {
  const chatsArr = data
    .map((chat) => (
      <ChatPreview
        key={chat.name}
        data={chat}
        isActive={chat.id === activeChatId}
        setActiveChatId={setActiveChatId}
      />
    ));

  return (
    <div className="chat-list">
      {chatsArr}
    </div>
  );
}

export default ChatsList;
