import Avatar from '../Avatar/Avatar';
import './ChatPreview.scss';

function ChatPreview() {
  return (
    <div className="chat-preview">
      <div className="chat-preview-wrapper">
        <Avatar />
        <div className="chat-preview-text">
          <div className="chat-preview__title">Sal Fisher👻</div>
          <div className="chat-preview__last-message">It was just a joke, but now I need a very long text here</div>
        </div>
      </div>
      <div className="chat-preview__info">
        <div className="chat-preview__messenge-time">00:00</div>
        <div className="chat-preview__messenge-num">416</div>
      </div>
    </div>
  );
}

export default ChatPreview;
