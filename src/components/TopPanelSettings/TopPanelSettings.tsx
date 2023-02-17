import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import './TopPanelSettings.scss';
import { ReactComponent as MuteIcon } from '../../assets/icons/mute-bel.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';

export default function TopPanelSettings(props: { isOpen: boolean, onClose: () => void }) {
  const { isOpen, onClose } = props;

  const click = () => null;

  return (
    <nav className={isOpen ? 'top-panel-popup active' : 'top-panel-popup'} id="top-panel-popup" onMouseLeave={() => onClose()}>
      <div className="search-wrapper">
        <PopupMenuItem label="Search" icon={<SearchIcon />} handleClick={click} />
      </div>
      <PopupMenuItem label="Mute" icon={<MuteIcon />} handleClick={click} />
      <PopupMenuItem label="Call" icon={<PhoneIcon />} handleClick={click} />
      <PopupMenuItem label="Delete chat" icon={<TrashIcon />} handleClick={click} />
    </nav>
  );
}
