import React, {
  useState, useContext, useRef, useEffect,
} from 'react';
import styled from 'styled-components';
import {
  doc, getDoc, serverTimestamp, setDoc, updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { AuthContext } from '../../context/AuthContext';
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

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageValue(e.target.value);
    if (messageValue === '' || e.target.value === '') {
      setIsAudio(!isAudio);
    } else {
      setIsAudio(isAudio);
    }
  };

  // Chat activation
  const currentUser: User = useContext(AuthContext) as User;
  const { activeChatID } = useContext(ActiveChatContext);

  const activateChat = async () => {
    const chatID = currentUser.uid > activeChatID ? `${currentUser.uid}${activeChatID}` : `${activeChatID}${currentUser.uid}`;

    const res = await getDoc(doc(db, 'chats', chatID));

    if (!res.exists()) {
      await setDoc(doc(db, 'chats', chatID), { messages: [] });
      const user = await getDoc(doc(db, 'users', activeChatID));
      const userData = user.data();

      await updateDoc(doc(db, 'userChats', currentUser.uid), {
        [`${chatID}.userInfo`]: {
          uid: activeChatID,
          displayName: userData?.displayName,
          photoURL: userData?.photoURL,
        },
        [`${chatID}.createdAt`]: serverTimestamp(),
      });
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
          className="message-input__text-area"
          ref={textAreaRef}
          value={messageValue}
          onChange={handleChange}
          rows={1}
        />
        <button className="message-input__attach-btn" type="button" onClick={toggleAttachPopup}>
          <AttachIcon />
        </button>
        <AttachPopup isVisible={isVisibleAttach} handleMouseLeave={toggleAttachPopup} />
      </div>
      <button
        className="message-input__send-btn"
        type="button"
        onClick={activateChat}
      >
        {
          isAudio ? <SendMessageIcon /> : <AudioMessageIcon />
        }
      </button>
    </div>
  );
}

export default MessageInput;
