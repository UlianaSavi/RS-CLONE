export interface UserData {
  id: number,
  name: string,
  avatar: string,
  lastMessage: string,
  timeOfLastMessage: string,
  unreadMessages: number
}

export interface User {
  uid: string,
  name: string,
  avatarURL: string,
  email: string,
  isOnline: boolean
}

export interface Users {
  [uid: string]: User
}

export interface Message {
  conversationID: string,
  senderID: string,
  content: string,
  timestamp: number
}

export interface Messages {
  [uid: string]: Message
}

export interface Conversation {
  type: 'personal' | 'group',
  avatarURL: string,
  participants: { [uid: string]: boolean };
}

export interface Conversations {
  [uid: string]: Conversation
}
