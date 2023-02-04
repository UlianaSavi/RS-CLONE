import SettingsMenuItem from '../SettingsMenuItem/SettingsMenuItem';
import './Popup.scss';

interface PopupProps {
  isVisible: boolean
}

function Popup({ isVisible }: PopupProps) {
  return (
    <nav className={`popup ${isVisible ? 'active' : ''}`}>
      <SettingsMenuItem />
      <SettingsMenuItem />
      <SettingsMenuItem />
    </nav>
  );
}

export default Popup;
