import { useState } from 'react';
import Popup from '../Popup/Popup';
import { EmojiIcon, AttachIcon, SendMessageIcon } from '../../assets/icons/icons';
import './MessageInput.scss';

function MessageInput() {
  const [isVisible, setVisibility] = useState(false);

  const togglePopup = () => setVisibility(!isVisible);

  return (
    <div className="message-input">
      <div className="message-input__container">
        <button className="message-input__emotion-btn" type="button">
          <EmojiIcon />
        </button>
        <input type="text" className="message-input__text-area" placeholder="Message" />
        <button className="message-input__attach-btn" type="button" onClick={togglePopup}>
          <AttachIcon />
        </button>
        <Popup isVisible={isVisible} />
      </div>
      <button className="message-input__send-voice-btn" type="button">
        <SendMessageIcon />
      </button>
    </div>
  );
}

export default MessageInput;
