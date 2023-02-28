import { useContext } from 'react';
import ChatInfo from '../ChatInfo/ChatInfo';
import './TopPanel.scss';
import TopPanelTools from '../TopPanelTools/TopPanelTools';
import { ArrowLeftIcon } from '../../assets/icons/icons';
import { ActiveVisibilitySidebar } from '../../context/VisibleSidebarContext';

interface TopPanelProps {
  callback: () => void;
}

export default function TopPanel({ callback }: TopPanelProps) {
  const { isActiveSidebar, setActiveSidebar } = useContext(ActiveVisibilitySidebar);

  return (
    <div className="top-panel">
      <button
        type="button"
        className={!isActiveSidebar ? 'top-panel__arrow' : 'top-panel__arrow_revert'}
        onClick={() => {
          setActiveSidebar(!isActiveSidebar);
        }}
      >
        <ArrowLeftIcon />
      </button>
      <ChatInfo />
      <TopPanelTools callback={callback} />
    </div>
  );
}
