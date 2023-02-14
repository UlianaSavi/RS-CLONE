import { useContext } from 'react';
import Avatar from '../Avatar/Avatar';
import { AuthContext } from '../../context/AuthContext';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import type { User } from '../../types';
import './ChatPreview.scss';

interface ChatPreviewProps {
  data: User,
  isActive: boolean,
  setActiveUserID: React.Dispatch<React.SetStateAction<string>>
  isSearchMode: boolean
}

function ChatPreview({
  data, isActive, setActiveUserID, isSearchMode,
}: ChatPreviewProps) {
  const {
    uid, displayName, photoURL,
  } = data;

  const { setActiveChatID } = useContext(ActiveChatContext);
  const currentUser: User = useContext(AuthContext) as User;

  const selectChat = () => {
    const combinedID = currentUser.uid > uid ? `${currentUser.uid}${uid}` : `${uid}${currentUser.uid}`;
    setActiveUserID(uid);
    setActiveChatID(combinedID);
  };

  return (
    <button
      type="button"
      className={`chat-preview ${isActive ? 'active' : ''}`}
      onClick={selectChat}
    >
      <div className="chat-preview-wrapper">
        <Avatar image={photoURL} />
        <div className="chat-preview-text">
          <div className="chat-preview__title">{displayName}</div>
          {isSearchMode
            ? <div className="chat-preview__online-status">Online</div>
            : <div className="chat-preview__last-message">last message</div>}
        </div>
      </div>
      {!isSearchMode && (
      <div className="chat-preview__info">
        <div className="chat-preview__messenge-time">00:00</div>
        <div className="chat-preview__messenge-num">0</div>
      </div>
      )}
    </button>
  );
}

export default ChatPreview;
