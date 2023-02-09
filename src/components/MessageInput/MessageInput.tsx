import { useState } from 'react';
import AttachPopup from '../AttachPopup/AttachPopup';
import EmotionPopup from '../EmotionPopup/EmotionPopup';
import {
  EmojiIcon, AttachIcon, SendMessageIcon, AudioMessageIcon,
} from '../../assets/icons/icons';
import './MessageInput.scss';

function MessageInput() {
  const [isVisibleAttach, setVisibilityAttach] = useState(false);
  const [isVisibleEmotion, setVisibilityEmotion] = useState(false);
  const [messageValue, setMessageValue] = useState('');
  const [isAudio, setIsAudio] = useState(false);

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

  return (
    <div className="message-input">
      <div className="message-input__container">
        <button className="message-input__emotion-btn" type="button" onClick={toggleEmotionPopup} onMouseEnter={toggleEmotionPopup}>
          <EmojiIcon />
        </button>
        <EmotionPopup isVisible={isVisibleEmotion} handleMouseLeave={toggleEmotionPopup} />
        <textarea className="message-input__text-area" placeholder="Message" value={messageValue} onChange={handleChange} />
        <button className="message-input__attach-btn" type="button" onClick={toggleAttachPopup}>
          <AttachIcon />
        </button>
        <AttachPopup isVisible={isVisibleAttach} handleMouseLeave={toggleAttachPopup} />
      </div>
      <button className="message-input__send-btn" type="button">
        {
          isAudio ? <SendMessageIcon /> : <AudioMessageIcon />
        }
      </button>
    </div>
  );
}

export default MessageInput;
