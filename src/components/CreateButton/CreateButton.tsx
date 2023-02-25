import { ArrowLeftIcon, CreateNewChatIcon } from '../../assets/icons/icons';
import './CreateButton.scss';

interface CreateButtonpProps {
  isSearchMode: boolean,
  isGroupCreationMode: boolean,
  handleClick: () => void,
}

function CreateButton({ isSearchMode, handleClick, isGroupCreationMode }: CreateButtonpProps) {
  return (
    <button
      type="button"
      className={`icon-button ${!isSearchMode || isGroupCreationMode ? '' : 'hidden'}`}
      onClick={handleClick}
    >
      {isGroupCreationMode ? <ArrowLeftIcon /> : <CreateNewChatIcon />}
    </button>
  );
}

export default CreateButton;
