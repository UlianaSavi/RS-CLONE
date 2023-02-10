import Avatar from '../Avatar/Avatar';
import type { User } from '../../types';
import './ChatPreview.scss';

interface ChatPreviewProps {
  data: User,
  isActive: boolean,
  setActiveChatId: React.Dispatch<React.SetStateAction<string>>
}

function ChatPreview({
  data, isActive, setActiveChatId,
}: ChatPreviewProps) {
  const {
    uid, displayName, photoURL,
  } = data;

  const selectChat = () => setActiveChatId(uid);

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
          <div className="chat-preview__last-message">last message</div>
        </div>
      </div>
      <div className="chat-preview__info">
        <div className="chat-preview__messenge-time">00:00</div>
        <div className="chat-preview__messenge-num">42</div>
      </div>
    </button>
  );
}

export default ChatPreview;
