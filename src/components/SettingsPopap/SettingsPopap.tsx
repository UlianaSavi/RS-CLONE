import { useContext } from 'react';
import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import { ReactComponent as SavedMessIcon } from '../../assets/icons/bookmark.svg';
import { ReactComponent as SettingIcon } from '../../assets/icons/setting-icon.svg';
import { DarkModeIcon } from '../../assets/icons/icons';
import './SettingsPopap.scss';
import { ThemeContext } from '../../context/ThemeContext';

function SettingsMenu(props: { isOpen: boolean, onClose: () => void,
  onSidebarChange: () => void }) {
  const { isOpen, onClose, onSidebarChange } = props;
  const { isDark, setIsDark } = useContext(ThemeContext);

  const click = () => null;

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className={isOpen ? 'popup active' : 'popup'} id="popup" onMouseLeave={() => onClose()}>
      <PopupMenuItem label="Saved Messages" icon={<SavedMessIcon />} handleClick={click} />
      <PopupMenuItem label="Settings" icon={<SettingIcon />} handleClick={onSidebarChange} />
      <div className="dark-mode" onClick={changeTheme} role="presentation">
        <PopupMenuItem label="Dark mode" icon={<DarkModeIcon />} handleClick={click} />
        <div className={`switch-btn switch-${!isDark ? 'on' : 'off'}`} />
      </div>
    </nav>
  );
}

export default SettingsMenu;
