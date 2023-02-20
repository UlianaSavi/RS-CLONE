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

  const selectFolder = () => setActiveIndex(index);

  return (
    <button
      type="button"
      className={`folder-tab ${isActive ? 'active' : ''}`}
      onClick={selectFolder}
    >
      <div className="folder-tab__title">{title}</div>
      {unreadConversations ? <span className="folder-tab__message-count">{unreadConversations}</span> : null}
    </button>
  );
}

export default ChatsFolderItem;
