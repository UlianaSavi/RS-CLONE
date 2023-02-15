import * as firestore from 'firebase/firestore';

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
    date: firestore.Timestamp,
    text: string
  }
}

export interface Users {
  [uid: string]: User
}
export interface IMessageDate {
  nanoseconds: number,
  seconds: number
}

export interface Message {
  date: IMessageDate,
  id: string,
  senderID: string,
  text: string
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
