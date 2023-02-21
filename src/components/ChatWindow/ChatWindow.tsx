/* eslint-disable no-console */
import {
  useContext, useRef, useEffect, useState,
} from 'react';
import { doc, onSnapshot, DocumentData } from '@firebase/firestore';
import { db } from '../../firebaseConfig';
import { ArrowLeftIcon } from '../../assets/icons/icons';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { SendImageContext } from '../../context/SendImageContext';
import { ModalPhotoContext } from '../../context/ModalPhotoContext';
import MessageInput from '../MessageInput/MessageInput';
import { BubblesDateGroup } from '../BubblesDateGroup/BubblesDateGroup';
import SendImagePopap from '../SendImagePopap/SendImagePopap';
import { AuthContext } from '../../context/AuthContext';
import { User } from '../../types';
import BubblesMessage from '../BubblesMessage/BubblesMessage';
import ModalPhoto from '../ModalPhoto/ModalPhoto';
import './ChatWindow.scss';

function ChatWindow() {
  const { popap } = useContext(SendImageContext);
  const { url, imagePopap } = useContext(ModalPhotoContext);
  const { activeChatID } = useContext(ActiveChatContext);
  const currentUser: User = useContext(AuthContext) as User;

  const [messagesArr, setMessageArr] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    if (activeChatID) {
      onSnapshot(doc(db, 'chats', activeChatID), (d) => {
        const data = d.data();
        if (!data) {
          console.log('Hey! There are no messages here.');
          return;
        }

        setMessageArr(data.messages
          .map((message: DocumentData) => (
            <BubblesMessage
              message={message.text}
              time={`${(new Date(message.date.seconds * 1000))
                .getHours().toString().padStart(2, '0')}:${new Date(message.date.seconds * 1000)
                .getMinutes().toString().padStart(2, '0')}`}
              isRead
              isCurrenUser={message.senderID === currentUser?.uid}
              key={message.id}
              imageUrl={message.imageUrl}
            />
          )));
      });
    }
  }, [activeChatID]);

  const messageContainerRef = useRef<HTMLDivElement>(null);
  const messageContainer = messageContainerRef.current;

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [scrolledToBottom, setScrolledToBottom] = useState(true);
  const [isToLastMsgBtnVisible, setToLastMsgBtnVisible] = useState(false);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = messageContainerRef.current as HTMLDivElement;
    if (scrollTop + clientHeight === scrollHeight) {
      setScrolledToBottom(true);
      setToLastMsgBtnVisible(false);
    } else {
      setScrolledToBottom(false);
      setToLastMsgBtnVisible(true);
    }
  };

  const handleToLastMsgBtn = () => {
    if (messageContainer) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (messageContainer) {
      messagesEndRef.current?.scrollIntoView();
    }
    messageContainer?.addEventListener('scroll', handleScroll);
    return () => messageContainer?.removeEventListener('scroll', handleScroll);
  }, [activeChatID, messageContainer, messageContainer?.scrollHeight]);

  useEffect(() => {
    if (messageContainer && scrolledToBottom) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messagesArr]);

  return (
    <div className="chat-window">
      {activeChatID && (
        <div className="chat-window__wrapper" ref={messageContainerRef}>
          <BubblesDateGroup date="Today" messagesArr={messagesArr} />
          <div ref={messagesEndRef} />
          <button
            type="button"
            className={`to-last-message-button ${isToLastMsgBtnVisible ? '' : 'hidden'}`}
            onClick={handleToLastMsgBtn}
          >
            <ArrowLeftIcon />
          </button>
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
      {imagePopap && <ModalPhoto imageUrl={url} />}
      {popap && <SendImagePopap />}
    </div>
  );
}

export default ChatWindow;
