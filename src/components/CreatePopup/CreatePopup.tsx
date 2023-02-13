import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import './CreatePopup.scss';
import { ReactComponent as SettingIcon } from '../../assets/icons/setting-icon.svg';

interface CreatePopupProps {
  isVisible: boolean,
  closePopup: () => void
}

function CreatePopup({ isVisible, closePopup }: CreatePopupProps) {
  const click = () => {
    closePopup();
  };

  return (
    <nav
      className={`create-popup ${isVisible ? 'active' : ''}`}
      onMouseLeave={closePopup}
    >
      <PopupMenuItem label="New Group" icon={<SettingIcon />} handleClick={click} />
      <PopupMenuItem label="New Private Chat" icon={<SettingIcon />} handleClick={click} />
    </nav>
  );
}

export default CreatePopup;
