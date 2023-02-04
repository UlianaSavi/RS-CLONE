import './MessageInput.scss';
import { EmojiIcon, AttachIcon, SendMessageIcon } from '../../assets/icons/icons';

function MessageInput() {
  return (
    <div className="message-input">
      <div className="message-input__container">
        <button className="message-input__emotion-btn" type="button">
          <EmojiIcon />
        </button>
        <input type="text" className="message-input__text-area" placeholder="Message" />
        <button className="message-input__attach-btn" type="button">
          <AttachIcon />
        </button>
      </div>
      <button className="message-input__send-voice-btn" type="button">
        <SendMessageIcon />
      </button>
    </div>
  );
}

export default MessageInput;
