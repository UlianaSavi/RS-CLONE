import SettingsMenuItem from '../SettingsMenuItem/SettingsMenuItem';
import './SettingsMenu.scss';

// Пока не знаю, куда лучше выносить логику, поэтому для удобства дальнейшего рефактора это здесь
const closePopup = () => {
  const popup = document.getElementById('popup');
  popup?.classList.remove('active');
};

function SettingsMenu() {
  return (
    <nav className="popup" id="popup" onMouseLeave={closePopup}>
      <SettingsMenuItem />
      <SettingsMenuItem />
      <SettingsMenuItem />
    </nav>
  );
}

export default SettingsMenu;
