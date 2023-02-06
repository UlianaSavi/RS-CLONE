/* eslint-disable no-undef */
import './ChatsFolderItem.scss';

interface ChatsFolderItemProps {
  data: {
    title: string,
    unreadConversations: number
  },
  isActive: boolean,
  index: number,
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
}

function ChatsFolderItem({
  data, isActive, index, setActiveIndex,
}: ChatsFolderItemProps) {
  const { title, unreadConversations } = data;

  return (
    <button
      type="button"
      className={`folder-tab ${isActive ? 'active' : ''}`}
      onClick={() => setActiveIndex(index)}
    >
      <div className="folder-tab__title">{title}</div>
      <span className="folder-tab__message-count">{unreadConversations}</span>
    </button>
  );
}

export default ChatsFolderItem;
