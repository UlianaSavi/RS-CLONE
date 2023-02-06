import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import { SettingsIcon } from '../../assets/icons/icons';
import './AttachPopup.scss';

interface AttachPopupProps {
  isVisible: boolean,
  handleMouseLeave: () => void
}

function AttachPopup({ isVisible, handleMouseLeave }: AttachPopupProps) {
  const click = () => null;

  return (
    <nav className={`attach-popup ${isVisible ? 'active' : ''}`} onMouseLeave={handleMouseLeave}>
      <PopupMenuItem label="Photo" icon={<SettingsIcon />} handleClick={click} />
      <PopupMenuItem label="Document" icon={<SettingsIcon />} handleClick={click} />
    </nav>
  );
}

export default AttachPopup;
