import Avatar from '../Avatar/Avatar';
import './ChatPreview.scss';

function ChatPreview() {
  return (
    <div className="chat-preview">
      <Avatar />
      <div>
        <div className="chat-preview__title">Title</div>
        <div className="chat-preview__last-message">last message</div>
      </div>
    </div>
  );
}

export default ChatPreview;
