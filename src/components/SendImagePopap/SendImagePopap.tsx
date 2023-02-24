import {
  useState, useContext, useRef,
} from 'react';
import styled from 'styled-components';
import type { User } from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { SendImageContext } from '../../context/SendImageContext';
import { UserContext } from '../../context/UserContext';
import { sendMessage, activateChat } from '../../API/api';
import { CloseIcon, MoreIcon } from '../../assets/icons/icons';
import './SendImagePopap.scss';
import { limit } from '../../constans';

const TextArea = styled.textarea``;

function SendImagePopap() {
  const [messageValue, setMessageValue] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const {
    popap,
    setPopap,
    url,
    setUrl,
    file,
    setFile,
  } = useContext(SendImageContext);
  const currentUser: User = useContext(AuthContext) as User;
  const { activeChatID, setActiveChatID } = useContext(ActiveChatContext);
  const { userID } = useContext(UserContext);

  function closePopap() {
    setUrl('');
    setFile(null);
    setPopap(!popap);
  }

  const handleSendMessageTextArea = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && messageValue.trim() !== '') {
      e.preventDefault();
      if (activeChatID !== userID) {
        await activateChat(currentUser, userID, activeChatID, setActiveChatID);
      }
      await sendMessage(messageValue, currentUser, activeChatID, userID, file);
      closePopap();
      setMessageValue('');
    }
    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageValue(e.target.value);
  };

  return (
    <div className="image-popap">
      <div className="image-popap__header">
        <CloseIcon callback={() => closePopap()} />
        <span className="image-popap__header__title">Send Photo</span>
        <MoreIcon />
      </div>
      <div className="image-popap__image-wrapper">
        <img className="img" src={url} alt="sending" />
      </div>
      <div className="captcha">
        <TextArea
          placeholder="Add a caption..."
          className="message-input__text-area"
          id="send"
          ref={textAreaRef}
          value={messageValue}
          onKeyDown={handleSendMessageTextArea}
          onChange={handleChange}
          rows={2}
        />
        <button
          disabled={file ? file?.size > limit : false}
          className="image-popap__send-button"
          data-title="File is too big! Max size - 7mb"
          type="button"
          onClick={async () => {
            if (activeChatID !== userID) {
              await activateChat(currentUser, userID, activeChatID, setActiveChatID);
            }
            sendMessage(messageValue, currentUser, activeChatID, userID, file);
            closePopap();
          }}
        >
          Send

        </button>
      </div>
    </div>
  );
}

export default SendImagePopap;
