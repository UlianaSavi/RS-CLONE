import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import { SettingsIcon } from '../../assets/icons/icons';
import './TopPanelSettings.scss';

export default function TopPanelSettings(props: { isOpen: boolean, onClose: () => void }) {
  const { isOpen, onClose } = props;

  const click = () => null;

  return (
    <nav className={isOpen ? 'top-panel-popup active' : 'top-panel-popup'} id="top-panel-popup" onMouseLeave={() => onClose()}>
      <PopupMenuItem label="Mute" icon={<SettingsIcon />} handleClick={click} />
      <PopupMenuItem label="Call" icon={<SettingsIcon />} handleClick={click} />
      <PopupMenuItem label="Delete chat" icon={<SettingsIcon />} handleClick={click} />
    </nav>
  );
}
