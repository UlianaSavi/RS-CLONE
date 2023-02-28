import {
  useContext, useRef, useEffect, useState, ReactNode,
} from 'react';
import { doc, onSnapshot, DocumentData } from '@firebase/firestore';
import { db } from '../../firebaseConfig';
import { ArrowLeftIcon } from '../../assets/icons/icons';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { SendImageContext } from '../../context/SendImageContext';
import MessageInput from '../MessageInput/MessageInput';
import { BubblesDateGroup } from '../BubblesDateGroup/BubblesDateGroup';
import SendImagePopap from '../SendImagePopap/SendImagePopap';
import { AuthContext } from '../../context/AuthContext';
import BubblesMessage from '../BubblesMessage/BubblesMessage';
import './ChatWindow.scss';

interface SplitByDates {
  date: string;
  messageArr: ReactNode[];
}

function ChatWindow() {
  const { popap } = useContext(SendImageContext);
  const { activeChatID } = useContext(ActiveChatContext);
  const { currentUser } = useContext(AuthContext);

  const [datesNMessagesArr, setDatesNMessagesArr] = useState<SplitByDates[]>([]);
  const [messagesListener, setMessagesListener] = useState<() => void>(() => () => null);

  useEffect(() => {
    if (activeChatID) {
      messagesListener();
      const listener = onSnapshot(doc(db, 'chats', activeChatID), (d) => {
        const data = d.data();
        if (!data) {
          setDatesNMessagesArr([]);
          return;
        }

        const datesNMessagesArray = data.messages
          .map((message: DocumentData) => ({
            date: new Date(message.date.seconds * 1000).toString().split(' ').slice(1, 3)
              .join(' '),
            messageBubble: <BubblesMessage
              message={message.text}
              time={`${(new Date(message.date.seconds * 1000))
                .getHours().toString().padStart(2, '0')}:${new Date(message.date.seconds * 1000)
                .getMinutes().toString().padStart(2, '0')}`}
              isRead
              isCurrenUser={message.senderID === currentUser?.uid}
              key={message.id}
              imageUrl={message.imageUrl}
              senderID={message.senderID}
            />,
          }));

        function splitByDate(setDatesArray: DocumentData[]) {
          const arr: SplitByDates[] = [];
          let shouldLeave = false;
          for (let i = 0; i < setDatesArray.length; i += 1) {
            if (shouldLeave) {
              break;
            }
            const item = setDatesArray[i];
            const index = arr.push({
              date: item.date,
              messageArr: [item.messageBubble],
            });
            for (let j = i + 1; j < setDatesArray.length; j += 1) {
              if (item.date === setDatesArray[j].date) {
                arr[index - 1].messageArr.push(setDatesArray[j].messageBubble);
                if (setDatesArray.length - 1 === j) {
                  shouldLeave = true;
                }
              } else {
                i = j - 1;
                break;
              }
            }
          }
          return arr;
        }
        const splitedByDate = splitByDate(datesNMessagesArray);

        setDatesNMessagesArr(splitedByDate);
      });
      setMessagesListener(() => listener);
    }
    return () => {
      messagesListener();
    };
  }, [activeChatID, currentUser]);

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
  }, [datesNMessagesArr]);

  let index = 0;

  return (
    <div className="chat-window">
      {activeChatID && (
        <div className="chat-window__wrapper" ref={messageContainerRef}>
          { datesNMessagesArr.length
            ? datesNMessagesArr.map((dateNMessages) => {
              index += 1;
              return (
                <BubblesDateGroup
                  date={dateNMessages.date}
                  messagesArr={dateNMessages.messageArr}
                  key={index}
                />
              );
            })
            : <span className="chat-window__no-messages-badge">No messages here yet...</span>}
          <div ref={messagesEndRef} />
          <div className="button-wrapper">
            <button
              type="button"
              className={`to-last-message-button ${isToLastMsgBtnVisible ? '' : 'hidden'}`}
              onClick={handleToLastMsgBtn}
            >
              <ArrowLeftIcon />
            </button>
          </div>
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
