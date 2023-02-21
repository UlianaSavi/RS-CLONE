/* eslint-disable no-unused-vars */
import React, {
  useState, useContext, useRef, useEffect,
} from 'react';
import styled from 'styled-components';
import {
  doc, getDoc, serverTimestamp, setDoc, updateDoc, arrayUnion, Timestamp,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import { ActiveChatContext } from '../../context/ActiveChatContext';

import AttachPopup from '../AttachPopup/AttachPopup';
import EmotionPopup from '../EmotionPopup/EmotionPopup';
import type { User } from '../../types';

import {
  EmojiIcon, AttachIcon, SendMessageIcon, AudioMessageIcon,
} from '../../assets/icons/icons';
import './MessageInput.scss';

const TextArea = styled.textarea``;

function MessageInput() {
  const [isVisibleAttach, setVisibilityAttach] = useState(false);
  const [isVisibleEmotion, setVisibilityEmotion] = useState(false);
  const [isAudio, setIsAudio] = useState(false);

  const [messageValue, setMessageValue] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  useEffect(resizeTextArea, [messageValue]);

  const toggleAttachPopup = () => setVisibilityAttach(!isVisibleAttach);
  const toggleEmotionPopup = () => setVisibilityEmotion(!isVisibleEmotion);

  // Chat activation
  const currentUser: User = useContext(AuthContext) as User;
  const { userID } = useContext(UserContext);
  const { activeChatID, setActiveChatID } = useContext(ActiveChatContext);

  const activateChat = async () => {
    const combinedID = currentUser.uid > userID ? `${currentUser.uid}${userID}` : `${userID}${currentUser.uid}`;
    setActiveChatID(combinedID);
    const chat = await getDoc(doc(db, 'chats', activeChatID));
    const userChat = await getDoc(doc(db, 'userChats', userID));
    const currentUserChat = await getDoc(doc(db, 'userChats', currentUser.uid));

    if (!chat.exists()) {
      await setDoc(doc(db, 'chats', activeChatID), { messages: [] });
    }

    if (!userChat.get(activeChatID)) {
      await updateDoc(doc(db, 'userChats', userID), {
        [`${activeChatID}.userInfo`]: {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
          isOnline: true,
        },
        [`${activeChatID}.createdAt`]: serverTimestamp(),
        [`${activeChatID}.unreadMessages`]: 0,
      });
    }

    if (!currentUserChat.get(activeChatID)) {
      const user = await getDoc(doc(db, 'users', userID));
      const userData = user.data();

      await updateDoc(doc(db, 'userChats', currentUser.uid), {
        [`${activeChatID}.userInfo`]: {
          uid: userID,
          displayName: userData?.displayName,
          photoURL: userData?.photoURL,
          isOnline: true,
        },
        [`${activeChatID}.createdAt`]: serverTimestamp(),
        [`${activeChatID}.unreadMessages`]: 0,
      });
    }
  };

  // Send message
  const sendMessage = async (messageText: string) => {
    await updateDoc(doc(db, 'chats', activeChatID), {
      messages: arrayUnion({
        id: Math.floor(10000000000 + Math.random() * 90000000000),
        text: messageText,
        senderID: currentUser.uid,
        date: Timestamp.now(),
      }),
    });

    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [`${activeChatID}.lastMessage`]: {
        text: messageText,
        date: serverTimestamp(),
      },
    });

    const chats = await getDoc(doc(db, 'userChats', userID));
    const data = chats.data();
    if (!data) return;
    let { unreadMessages } = data[activeChatID];

    await updateDoc(doc(db, 'userChats', userID), {
      [`${activeChatID}.lastMessage`]: {
        text: messageText,
        date: serverTimestamp(),
      },
      [`${activeChatID}.unreadMessages`]: unreadMessages += 1,
    });
  };

  const handleSendMessageBtn = async () => {
    if (messageValue.trim() !== '') {
      await activateChat();
      await sendMessage(messageValue);
      setIsAudio(!isAudio);
      setMessageValue('');
    }
    return null;
  };

  const handleSendMessageTextArea = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && messageValue.trim() !== '') {
      e.preventDefault();
      await activateChat();
      await sendMessage(messageValue.trim());
      setIsAudio(!isAudio);
      setMessageValue('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageValue(e.target.value);
    if (messageValue === '' || e.target.value === '') {
      setIsAudio(!isAudio);
    } else {
      setIsAudio(isAudio);
    }
  };

  return (
    <div className="message-input">
      <div className="message-input__container">
        <button className="message-input__emotion-btn" type="button" onClick={toggleEmotionPopup} onMouseEnter={toggleEmotionPopup}>
          <EmojiIcon />
        </button>
        <EmotionPopup isVisible={isVisibleEmotion} handleMouseLeave={toggleEmotionPopup} />
        <TextArea
          placeholder="Message"
          id="message"
          className="message-input__text-area"
          ref={textAreaRef}
          value={messageValue}
          onChange={handleChange}
          onKeyDown={handleSendMessageTextArea}
          rows={1}
        />
        <button className="message-input__attach-btn" type="button" onClick={toggleAttachPopup}>
          <AttachIcon />
        </button>
        <AttachPopup
          isVisible={isVisibleAttach}
          handleMouseLeave={toggleAttachPopup}
        />
      </div>
      <button
        className="message-input__send-btn"
        type="button"
        onClick={handleSendMessageBtn}
      >
        {
          isAudio ? <SendMessageIcon /> : <AudioMessageIcon />
        }
      </button>
    </div>
  );
}

export default MessageInput;
