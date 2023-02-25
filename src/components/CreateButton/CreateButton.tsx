import { useContext } from 'react';
import { ArrowLeftIcon, CreateNewChatIcon } from '../../assets/icons/icons';
import { SelectedUsersContext } from '../../context/SelectedUsersContext';
import './CreateButton.scss';

interface CreateButtonpProps {
  isSearchMode: boolean,
  isGroupCreationMode: boolean,
  isGroupInfo: boolean,
  handleClick: () => void,
}

function CreateButton({
  isSearchMode, handleClick, isGroupCreationMode, isGroupInfo,
}: CreateButtonpProps) {
  const { selectedUsers } = useContext(SelectedUsersContext);
  return (
    <button
      type="button"
      className={`icon-button ${!isSearchMode || isGroupInfo || (isGroupCreationMode && selectedUsers.length) ? '' : 'hidden'}`}
      onClick={handleClick}
    >
      {isGroupCreationMode || isGroupInfo ? <ArrowLeftIcon /> : <CreateNewChatIcon />}
    </button>
  );
}

export default CreateButton;
