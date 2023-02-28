import './TopPanelPinnedMessage.scss';
import { ReactComponent as PinnedListIcon } from '../../assets/icons/pinned-list.svg';
import { ReactComponent as VerticalLine } from '../../assets/icons/vertical-line.svg';

export default function TopPanelPinnedMessage() {
  return (
    <div className="top-panel-pinned__wrapper">
      <div className="top-panel-pinned__pinned-messages">
        <div className="top-panel-pinned__left-border">
          <VerticalLine className="top-panel-pinned__line active" />
          <VerticalLine className="top-panel-pinned__line" />
        </div>
        <div className="top-panel-pinned__message-content">
          <div className="top-panel-pinned__pinned-message-text">Pinned Message</div>
          <div className="top-panel-pinned__message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, beatae doloremque facere tenetur ratione non, itaque saepe facilis earum alias quisquam culpa quia mollitia doloribus ex repellendus, molestiae dolore impedit.</div>
        </div>
      </div>
      <button className="top-panel-pinned__btn" type="button">
        <PinnedListIcon className="top-panel-pinned__pin-icon" />
      </button>
    </div>
  );
}
