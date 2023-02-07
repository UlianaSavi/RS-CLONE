/* eslint-disable no-undef */
import PopupMenu from '../PopupMenu/PopupMenu';
import Avatar from '../Avatar/Avatar';
import type { UserData } from '../../types';
import './ChatPreview.scss';

interface ChatPreviewProps {
  data: UserData,
  isActive: boolean,
  setActiveChatId: React.Dispatch<React.SetStateAction<number>>
}

function ChatPreview({
  data, isActive, setActiveChatId,
}: ChatPreviewProps) {
  const {
    id, name, avatar, lastMessage, timeOfLastMessage, unreadMessages,
  } = data;

  const selectChat = () => setActiveChatId(id);

  const handleContextMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(name);
  };

  return (
    <>
      <button
        type="button"
        className={`chat-preview ${isActive ? 'active' : ''}`}
        onClick={selectChat}
        onContextMenu={handleContextMenu}
      >
        <div className="chat-preview-wrapper">
          <Avatar image={avatar} />
          <div className="chat-preview-text">
            <div className="chat-preview__title">{name}</div>
            <div className="chat-preview__last-message">{lastMessage}</div>
          </div>
        </div>
        <div className="chat-preview__info">
          <div className="chat-preview__messenge-time">{timeOfLastMessage}</div>
          {unreadMessages ? <div className="chat-preview__messenge-num">{unreadMessages}</div> : ''}
        </div>
      </button>
      <PopupMenu isVisible />
    </>
  );
}

export default ChatPreview;
