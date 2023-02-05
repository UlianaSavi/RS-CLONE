import { useState } from 'react';
import AttachPopup from '../AttachPopup/AttachPopup';
import { EmojiIcon, AttachIcon, SendMessageIcon } from '../../assets/icons/icons';
import './MessageInput.scss';

function MessageInput() {
  const [isVisible, setVisibility] = useState(false);

  const toggleAttachPopup = () => setVisibility(!isVisible);

  return (
    <div className="message-input">
      <div className="message-input__container">
        <button className="message-input__emotion-btn" type="button">
          <EmojiIcon />
        </button>
        <input type="text" className="message-input__text-area" placeholder="Message" />
        <button className="message-input__attach-btn" type="button" onClick={toggleAttachPopup}>
          <AttachIcon />
        </button>
        <AttachPopup isVisible={isVisible} />
      </div>
      <button className="message-input__send-btn" type="button">
        <SendMessageIcon />
      </button>
    </div>
  );
}

export default MessageInput;
