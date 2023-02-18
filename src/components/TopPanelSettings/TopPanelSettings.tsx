import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import './TopPanelSettings.scss';

import {
  MuteIcon, PhoneIconTopPanel, TrashIcon, SearchIconTopPanel,
} from '../../assets/icons/icons';

export default function TopPanelSettings(props: { isOpen: boolean, onClose: () => void }) {
  const { isOpen, onClose } = props;

  const click = () => null;

  return (
    <nav className={isOpen ? 'top-panel-popup active' : 'top-panel-popup'} id="top-panel-popup" onMouseLeave={() => onClose()}>
      <div className="search-wrapper">
        <PopupMenuItem label="Search" icon={<SearchIconTopPanel />} handleClick={click} />
      </div>
      <PopupMenuItem label="Mute" icon={<MuteIcon />} handleClick={click} />
      <PopupMenuItem label="Call" icon={<PhoneIconTopPanel />} handleClick={click} />
      <PopupMenuItem label="Delete chat" icon={<TrashIcon />} handleClick={click} />
    </nav>
  );
}
