export interface User {
  uid: string,
  displayName: string,
  photoURL: string,
  email: string,
  isOnline: boolean
}

export interface UserChat {
  userInfo: User,
  lastMessage: {
    date: number,
    text: string
  }
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
