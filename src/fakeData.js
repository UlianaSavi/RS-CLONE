export const groupsData = [
  {
    id: 1,
    name: 'Launge',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRESh2hh7u_t-VkB5GEouQCbL0-RahdE1SE2g&usqp=CAU',
    lastMessage: 'Thanks for getting back to me so quickly!',
    timeOfLastMessage: '23:59',
    unreadMessages: 2,
  },
];

export const usersData = [
  {
    id: 2,
    name: 'Alice',
    avatar: 'https://i.pinimg.com/564x/9e/c3/9f/9ec39f56b00c97ab0ef3a99817b27f87.jpg',
    lastMessage: 'Hey, just wanted to touch base about',
    timeOfLastMessage: '11:14',
    unreadMessages: 42,
  },
  {
    id: 3,
    name: 'Bob',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXvV8B00DCXZWB4z0w0XUF66D7jVK8zrg3A&usqp=CAU',
    lastMessage: 'I\'m running late for our meeting today',
    timeOfLastMessage: '18:22',
    unreadMessages: 999,
  },
  {
    id: 4,
    name: 'John',
    avatar: '',
    lastMessage: 'Can you send over the latest version of',
    timeOfLastMessage: '13:20',
    unreadMessages: 0,
  },
];

export const foldersData = [
  {
    title: 'All',
    unreadConversations: 0,
    content: [...groupsData, ...usersData],
  },
  {
    title: 'Contacts',
    unreadConversations: 0,
    content: usersData,
  },
];
