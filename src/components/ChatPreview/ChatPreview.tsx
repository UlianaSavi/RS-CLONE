import Avatar from '../Avatar/Avatar';
import './ChatPreview.scss';

interface ChatPreviewProps {
  status: 'active' | 'inactive';
}

function ChatPreview({ status }: ChatPreviewProps) {
  const stylesList = `chat-preview ${status === 'active' ? 'chat-preview_active' : ''}`;

  return (
    <div className={stylesList}>
      <Avatar />
      <div>
        <div className="chat-preview__title">Title</div>
        <div className="chat-preview__last-message">last message</div>
      </div>
    </div>
  );
}

export default ChatPreview;
