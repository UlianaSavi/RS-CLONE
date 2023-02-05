import './TopPanelTools.scss';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { ReactComponent as MoreIcon } from '../../assets/icons/ellipsis-vertical-solid.svg';

export default function TopPanel(props: {callback: () => void}) {
  const { callback } = props;
  return (
    <div className="top-panel-tools">
      <button className="top-panel-tools__btn" type="button">
        <SearchIcon className="top-panel-tools__search" />
      </button>
      <button className="top-panel-tools__btn" type="button" onClick={() => callback()}>
        <MoreIcon className="top-panel-tools__more" />
      </button>
    </div>
  );
}
