/* eslint-disable no-unused-vars */
import React, {
  useState, useContext, useRef, useEffect,
} from 'react';
import styled from 'styled-components';
import type { User } from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { clickedEmoji } from '../../context/ClickedEmojiContext';
import { sendMessage, activateChat } from '../../API/api';
import AttachPopup from '../AttachPopup/AttachPopup';
import EmotionPopup from '../EmotionPopup/EmotionPopup';

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

  const currentUser: User = useContext(AuthContext) as User;
  const { userID } = useContext(UserContext);
  const { activeChatID, setActiveChatID } = useContext(ActiveChatContext);

  const handleSendMessageBtn = async () => {
    if (messageValue.trim() !== '') {
      if (activeChatID !== userID) {
        await activateChat(currentUser, userID, activeChatID, setActiveChatID);
      }
      await sendMessage(messageValue, currentUser, activeChatID, userID);
      setIsAudio(!isAudio);
      setMessageValue('');
    }
    return null;
  };

  const handleSendMessageTextArea = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && messageValue.trim() !== '') {
      e.preventDefault();
      if (activeChatID !== userID) {
        await activateChat(currentUser, userID, activeChatID, setActiveChatID);
      }
      await sendMessage(messageValue.trim(), currentUser, activeChatID, userID);
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

  const { isClickedEmoji, setClickedEmoji } = useContext(clickedEmoji);

  useEffect(() => {
    setMessageValue(messageValue + isClickedEmoji);
    setIsAudio(true);
    textAreaRef.current?.focus();
    setClickedEmoji('');
  }, [isClickedEmoji]);

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
          onInput={handleChange}
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
