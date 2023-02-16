import ChatInfo from '../ChatInfo/ChatInfo';
import './TopPanel.scss';
import TopPanelTools from '../TopPanelTools/TopPanelTools';
import TopPanelPinnedMessage from '../TopPanelPinnedMessage/TopPanelPinnedMessage';
import { ArrowLeftIcon } from '../../assets/icons/icons';

interface TopPanelProps {
  callback: () => void
}

export default function TopPanel({ callback }: TopPanelProps) {
  return (
    <div className="top-panel">
      <button
        type="button"
        className="top-panel__arrow"
      >
        <ArrowLeftIcon />
      </button>
      <ChatInfo />
      <TopPanelPinnedMessage />
      <TopPanelTools callback={callback} />
    </div>
  );
}
