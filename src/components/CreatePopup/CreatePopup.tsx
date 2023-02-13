import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import './CreatePopup.scss';
import { ReactComponent as SettingIcon } from '../../assets/icons/setting-icon.svg';

interface CreatePopupProps {
  isVisible: boolean,
  handleMouseLeave: () => void
}

function CreatePopup({ isVisible, handleMouseLeave }: CreatePopupProps) {
  const click = () => null;

  return (
    <nav
      className={`create-popup ${isVisible ? 'active' : ''}`}
      onMouseLeave={handleMouseLeave}
    >
      <PopupMenuItem label="New Group" icon={<SettingIcon />} handleClick={click} />
      <PopupMenuItem label="New Private Chat" icon={<SettingIcon />} handleClick={click} />
    </nav>
  );
}

export default CreatePopup;
