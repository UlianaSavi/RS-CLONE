import { useState, useContext } from 'react';
import ChatInfo from '../ChatInfo/ChatInfo';
import './TopPanel.scss';
import TopPanelTools from '../TopPanelTools/TopPanelTools';
import TopPanelPinnedMessage from '../TopPanelPinnedMessage/TopPanelPinnedMessage';
import { ArrowLeftIcon } from '../../assets/icons/icons';
import { ActiveVisibilitySidebar } from '../../context/VisibleSidebarContext';

interface TopPanelProps {
  callback: () => void;
}

export default function TopPanel({ callback }: TopPanelProps) {
  const [isClicked, setClick] = useState(true);
  const { setActiveSidebar } = useContext(ActiveVisibilitySidebar);
  setActiveSidebar(isClicked);

  return (
    <div className="top-panel">
      <button
        type="button"
        className={isClicked ? 'top-panel__arrow' : 'top-panel__arrow_revert'}
        onClick={() => {
          setClick(!isClicked);
        }}
      >
        <ArrowLeftIcon />
      </button>
      <ChatInfo />
      <TopPanelPinnedMessage />
      <TopPanelTools callback={callback} />
    </div>
  );
}
