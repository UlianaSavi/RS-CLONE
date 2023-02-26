import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import './CreatePopup.scss';
import { NewGroupIcon, NewPrivateChatIcon } from '../../assets/icons/icons';

interface CreatePopupProps {
  isVisible: boolean,
  closePopup: () => void,
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>,
  setGroupCreationMode: React.Dispatch<React.SetStateAction<boolean>>,
}

function CreatePopup({
  isVisible, closePopup, setSearchMode, setGroupCreationMode,
}: CreatePopupProps) {
  const createNewGroup = () => {
    setSearchMode(true);
    setGroupCreationMode(true);
    closePopup();
  };

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
        icon={<NewGroupIcon />}
        handleClick={createNewGroup}
      />
      <PopupMenuItem
        label="New Private Chat"
        icon={<NewPrivateChatIcon />}
        handleClick={createNewPrivateChat}
      />
    </nav>
  );
}

export default CreatePopup;
