import React from 'react';
import ChatInfo from '../ChatInfo/ChatInfo';
import ChatInput from '../ChatInput/ChatInput';
import ChatWindow from '../ChatWindow/ChatWindow';
import './Chat.scss';

function Chat() {
  return (
    <div className="chat">
      <ChatInfo />
      <ChatWindow />
      <ChatInput />
    </div>
  );
}

export default Chat;
