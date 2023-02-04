import './TopPanelTools.scss';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
// import { ReactComponent as MoreIcon } from '../../assets/icons/ellipsis-vertical-solid.svg';
// import { togglePopup } from '../../hooks/popup';

export default function TopPanel() {
  // const popup = document.getElementById('top-panel-popup');
  return (
    <div className="top-panel-tools">
      <button className="top-panel-tools__btn" type="button">
        <SearchIcon className="top-panel-tools__search" />
      </button>
      {/* <button className="top-panel-tools__btn" type="button" onClick={() => togglePopup(popup)}>
        <MoreIcon className="top-panel-tools__more" />
      </button> */}
    </div>
  );
}
