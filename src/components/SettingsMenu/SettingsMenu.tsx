import SettingsMenuItem from '../SettingsMenuItem/SettingsMenuItem';
import './SettingsMenu.scss';

function SettingsMenu(props: { isOpen: boolean, onClose: () => void }) {
  const { isOpen, onClose } = props;
  return (
    <nav className={isOpen ? 'popup active' : 'popup'} id="popup" onMouseLeave={() => onClose()}>
      <SettingsMenuItem />
      <SettingsMenuItem />
      <SettingsMenuItem />
    </nav>
  );
}

export default SettingsMenu;
