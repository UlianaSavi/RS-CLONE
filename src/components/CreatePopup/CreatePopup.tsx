import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import './CreatePopup.scss';
import { ReactComponent as NewGroupIcon } from '../../assets/icons/new-group.svg';
import { ReactComponent as NewPrivateChatIcon } from '../../assets/icons/new-contact.svg';

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
