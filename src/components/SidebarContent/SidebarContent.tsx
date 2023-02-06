import { useState } from 'react';
import FoldersTabs from '../FoldersTabs/FoldersTabs';
import ChatsList from '../ChatsList/ChatsList';
import './SidebarContent.scss';

function SidebarContent() {
  const chatsData = [
    {
      name: 'Launge',
      avatar: 'data:image/jpeg;base64,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71J96n4axMS+VlxWxzqWUrIBz36myb3x08tZt6zt/DPI+jwq+rWaVm9yggAKCAAoAAIAAACgAgAAAAMjR6j/AB237piYl3S2pZ5cfnXX5XU6mb8o5V+9lvffqOkx4vH3PbHZtUB7xZbUtFqzNbR0mOWyw5tWLRqfcOj4ZxiuXamTauTpE9K5P6lrW23zM/Gmn8q+6tq6eVyPGcsX1GSYneI2rE/KOf33Y2n2+xxq+OONsJy3AAAUAEAABREFAUEBQAQAQFAUAEABQQAGTGvz9ns/5b9np157fPq68pZf8Me9+MbY7lqgAAKACAAsAAgiigiCqCAoAAIACggAKAICoACgggKAAAAoAgKCAqAoIAAIooACAAoAICggAALAAgCCgAKAACAAoAAICgAAgKCAoAAAAICgAAAAgKAAAAACAAAAoIACgAgAKCAAAoAAICgAAgKACAAoIAAACggKCAAoAICgAgAKACAAAoAICgAAgAAKCAAAAoAIAACgAAgAKCAoIAICqAACAoIAICgKAAACAAAAoAIACgAACIKACAqgAgAKACAogAKAAgAKAAAIgqggAKACAAoAgKCAAqAAu4IAAAKsCEggLAICgAggKACKKgqyIgALIECECoICgAgKAoIAI//Z',
      lastMessage: 'Thanks for getting back to me so quickly!',
      timeOfLastMessage: '23:59',
      unreadMessages: 2,
      type: 'group',
    },
    {
      name: 'Alice',
      avatar: 'https://i.pinimg.com/564x/9e/c3/9f/9ec39f56b00c97ab0ef3a99817b27f87.jpg',
      lastMessage: 'Hey, just wanted to touch base about',
      timeOfLastMessage: '11:14',
      unreadMessages: 42,
      type: 'contact',
    },
    {
      name: 'Bob',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXvV8B00DCXZWB4z0w0XUF66D7jVK8zrg3A&usqp=CAU',
      lastMessage: 'I\'m running late for our meeting today',
      timeOfLastMessage: '18:22',
      unreadMessages: 999,
      type: 'contact',
    },
    {
      name: 'John',
      avatar: '',
      lastMessage: 'Can you send over the latest version of',
      timeOfLastMessage: '13:20',
      unreadMessages: 0,
      type: 'contact',
    },
  ];

  const foldersData = [
    {
      title: 'All',
      unreadConversations: 3,
    },
    {
      title: 'Contacts',
      unreadConversations: 2,
    },
    {
      title: 'Chats',
      unreadConversations: 1,
    },
  ];

  const [activeFolder, setActiveFolder] = useState(0);

  const chatsList = activeFolder === 0 ? chatsData : chatsData.slice(1);

  return (
    <div className="sidebar-content">
      <FoldersTabs
        data={foldersData}
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
      />
      <ChatsList data={chatsList} />
    </div>
  );
}

export default SidebarContent;
