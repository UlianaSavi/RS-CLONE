import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import './CreatePopup.scss';
import { ReactComponent as SettingIcon } from '../../assets/icons/setting-icon.svg';

interface CreatePopupProps {
  isVisible: boolean,
  closePopup: () => void,
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>,
}

function CreatePopup({ isVisible, closePopup, setSearchMode }: CreatePopupProps) {
  const createNewGroup = () => closePopup();

  const createNewPrivateChat = () => {
    setSearchMode(true);
    closePopup();
  };

  return (
    <nav
      className={`create-popup ${isVisible ? 'active' : ''}`}
      onMouseLeave={closePopup}
    >
      <PopupMenuItem
        label="New Group"
        icon={<SettingIcon />}
        handleClick={createNewGroup}
      />
      <PopupMenuItem
        label="New Private Chat"
        icon={<SettingIcon />}
        handleClick={createNewPrivateChat}
      />
    </nav>
  );
}

export default CreatePopup;
