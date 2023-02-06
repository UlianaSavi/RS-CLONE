import ChatInfo from '../ChatInfo/ChatInfo';
import './TopPanel.scss';
import TopPanelTools from '../TopPanelTools/TopPanelTools';
import TopPanelPinnedMessage from '../TopPanelPinnedMessage/TopPanelPinnedMessage';

interface TopPanelProps {
  data: {
    avatar: string,
    title: string,
    status: string
  },
  callback: () => void
}

export default function TopPanel({ data, callback }: TopPanelProps) {
  const { avatar, title, status } = data;

  return (
    <div className="top-panel">
      <ChatInfo
        avatar={avatar}
        title={title}
        status={status}
      />
      <TopPanelPinnedMessage />
      <TopPanelTools callback={callback} />
    </div>
  );
}
