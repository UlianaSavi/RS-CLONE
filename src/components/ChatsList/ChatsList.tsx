import { useState } from 'react';
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
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXvV8B00DCXZWB4z0w0XUF66D7jVK8zrg3A&usqp=CAU',
      lastMessage: 'I\'m running late for our meeting today',
      timeOfLastMessage: '18:22',
      unreadMessages: 999,
    },
    {
      name: 'John',
      avatar: '',
      lastMessage: 'Can you send over the latest version of',
      timeOfLastMessage: '13:20',
      unreadMessages: 0,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const chatsArr = chatsData
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
