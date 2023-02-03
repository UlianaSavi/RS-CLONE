import './TopPanelPinnedMessage.scss';
import { ReactComponent as PinnedListIcon } from '../../assets/icons/pinned-list.svg';

export default function TopPanelPinnedMessage() {
  return (
    <div className="top-panel-pinned__wrapper">
      {/* <div className="top-panel-pinned__pinned-messages">
        <div className="top-panel-pinned__left-border"></div>
        <div className="top-panel-pinned__message"></div>
      </div> */}
      <button className="top-panel-pinned__btn" type="button">
        <PinnedListIcon className="top-panel-pinned__pin-icon" />
      </button>
    </div>
  );
}
