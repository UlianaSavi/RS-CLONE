import ChatInfo from '../ChatInfo/ChatInfo';
import './TopPanel.scss';
import TopPanelTools from '../TopPanelTools/TopPanelTools';
import TopPanelPinnedMessage from '../TopPanelPinnedMessage/TopPanelPinnedMessage';

interface TopPanelProps {
  activeChat: number,
  callback: () => void
}

export default function TopPanel({ activeChat, callback }: TopPanelProps) {
  return (
    <div className="top-panel">
      <ChatInfo activeChat={activeChat} />
      <TopPanelPinnedMessage />
      <TopPanelTools callback={callback} />
    </div>
  );
}
