import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import { SettingsIcon } from '../../assets/icons/icons';
import './AttachPopup.scss';

interface AttachPopupProps {
  isVisible: boolean,
  handleMouseLeave: () => void
}

function AttachPopup({ isVisible, handleMouseLeave }: AttachPopupProps) {
  return (
    <nav className={`attach-popup ${isVisible ? 'active' : ''}`} onMouseLeave={handleMouseLeave}>
      <PopupMenuItem label="Photo" icon={<SettingsIcon />} />
      <PopupMenuItem label="Document" icon={<SettingsIcon />} />
    </nav>
  );
}

export default AttachPopup;
