/* eslint-disable no-undef */
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
  activeChat: number,
  setActiveChat: React.Dispatch<React.SetStateAction<number>>
}

function ChatsList({ data, activeChat, setActiveChat }: ChatsListProps) {
  const chatsArr = data
    .map((chat, index) => (
      <ChatPreview
        key={chat.name}
        data={chat}
        isActive={index === activeChat}
        setActiveChat={setActiveChat}
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
