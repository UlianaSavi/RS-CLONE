import ChatInfo from '../ChatInfo/ChatInfo';
import './TopPanel.scss';
import TopPanelTools from '../TopPanelTools/TopPanelTools';

export default function TopPanel() {
  return (
    <div className="top-panel">
      <ChatInfo />
      <TopPanelTools />
    </div>
  );
}
