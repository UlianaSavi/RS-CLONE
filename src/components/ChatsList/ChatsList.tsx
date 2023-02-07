import { useState } from 'react';
import ChatPreview from '../ChatPreview/ChatPreview';
import './ChastList.scss';

interface ChatsListProps {
  data: {
    name: string,
    avatar: string,
    lastMessage: string,
    timeOfLastMessage: string,
    unreadMessages: number
  }[],
}

function ChatsList({ data }: ChatsListProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const chatsArr = data
    .map((chat, index) => (
      <ChatPreview
        key={chat.name}
        data={chat}
        isActive={index === activeIndex}
        setActiveIndex={setActiveIndex}
        index={index}
      />
    ));

  return (
    <div className="chat-list">
      {chatsArr}
    </div>
  );
}

export default ChatsList;
