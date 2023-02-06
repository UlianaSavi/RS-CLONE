import ChatPreview from '../ChatPreview/ChatPreview';
import './ChastList.scss';

function ChatsList() {
  const chatsData = [
    {
      name: 'Alice',
      avatar: 'https://i.pinimg.com/564x/9e/c3/9f/9ec39f56b00c97ab0ef3a99817b27f87.jpg',
      lastMessage: 'Hey, just wanted to touch base about',
      timeOfLastMessage: '11:14',
      unreadMessages: 42,
    },
    {
      name: 'Bob',
      avatar: 'https://i.pinimg.com/564x/9e/c3/9f/9ec39f56b00c97ab0ef3a99817b27f87.jpg',
      lastMessage: 'I\'m running late for our meeting today',
      timeOfLastMessage: '18:22',
      unreadMessages: 999,
    },
    {
      name: 'John',
      avatar: 'https://i.pinimg.com/564x/9e/c3/9f/9ec39f56b00c97ab0ef3a99817b27f87.jpg',
      lastMessage: 'Can you send over the latest version of',
      timeOfLastMessage: '13:20',
      unreadMessages: 0,
    },
  ];

  return (
    <div className="chat-list">
      {chatsData.map((chat) => <ChatPreview key={chat.name} data={chat} isActive />)}
    </div>
  );
}

export default ChatsList;
