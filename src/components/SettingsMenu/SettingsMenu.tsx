import SettingsMenuItem from '../SettingsMenuItem/SettingsMenuItem';
import './SettingsMenu.scss';

// Пока не знаю, куда лучше выносить логику, поэтому для удобства дальнейшего рефактора это здесь
const closePopap = () => {
  const popap = document.getElementById('popap');
  popap?.classList.remove('active');
};

function SettingsMenu() {
  return (
    <nav className="popap" id="popap" onMouseLeave={closePopap}>
      <SettingsMenuItem />
      <SettingsMenuItem />
      <SettingsMenuItem />
    </nav>
  );
}

export default SettingsMenu;
