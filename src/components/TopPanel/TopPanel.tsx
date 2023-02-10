import ChatInfo from '../ChatInfo/ChatInfo';
import './TopPanel.scss';
import TopPanelTools from '../TopPanelTools/TopPanelTools';
import TopPanelPinnedMessage from '../TopPanelPinnedMessage/TopPanelPinnedMessage';

interface TopPanelProps {
  activeChatId: string,
  callback: () => void
}

export default function TopPanel({ activeChatId, callback }: TopPanelProps) {
  return (
    <div className="top-panel">
      <ChatInfo activeChatId={activeChatId} />
      <TopPanelPinnedMessage />
      <TopPanelTools callback={callback} />
    </div>
  );
}
