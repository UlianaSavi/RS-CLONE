/* eslint-disable max-len */
import {
  useContext, useRef, useEffect, useState,
} from 'react';
import { doc, onSnapshot, DocumentData } from '@firebase/firestore';
import { db } from '../../firebaseConfig';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { SendImageContext } from '../../context/SendImageContext';
import MessageInput from '../MessageInput/MessageInput';
import { BubblesDateGroup } from '../BubblesDateGroup/BubblesDateGroup';
import SendImagePopap from '../SendImagePopap/SendImagePopap';

import './ChatWindow.scss';

function ChatWindow() {
  const { popap } = useContext(SendImageContext);
  const { activeChatID } = useContext(ActiveChatContext);

  const [messages, setMessages] = useState<DocumentData>([]);

  useEffect(() => {
    if (activeChatID) {
      onSnapshot(doc(db, 'chats', activeChatID), (d) => {
        const data = d.data();
        if (!data) {
          console.log('Hey! There are no messages here.');
          return;
        }
        setMessages(data.messages);
      });
    }
  }, [activeChatID]);

  const messageContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageContainer = messageContainerRef.current;
  const [scrolledToBottom, setScrolledToBottom] = useState(true);

  const handleScroll = () => {
    console.log('scroll');
    const { scrollTop, scrollHeight, clientHeight } = messageContainerRef.current as HTMLDivElement;
    if (scrollTop + clientHeight === scrollHeight) {
      setScrolledToBottom(true);
    } else {
      setScrolledToBottom(false);
    }
  };

  useEffect(() => {
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
    messageContainer?.addEventListener('scroll', handleScroll);
    return () => messageContainer?.removeEventListener('scroll', handleScroll);
  }, [activeChatID]);

  useEffect(() => {
    console.log(scrolledToBottom);
    if (messageContainer && scrolledToBottom) {
      // messageContainer.scrollTop = messageContainer.scrollHeight;
      messagesEndRef.current?.scrollIntoView();
    }
  }, [messages]);

  return (
    <div className="chat-window">
      {activeChatID && (
      <div className="chat-window__wrapper" ref={messageContainerRef}>
        <BubblesDateGroup date="Today" messages={messages} />
        <div ref={messagesEndRef} />
      </div>
      )}
      {activeChatID && <MessageInput />}
      <svg height="0" width="0">
        <defs>
          <clipPath id="svgPath">
            <path fill="#FFFFFF" d="M10,10H0V0H0A10,10,0,0,0,10,10Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="chat-window__bg-image" />
      {popap && <SendImagePopap />}
    </div>
  );
}

export default ChatWindow;
