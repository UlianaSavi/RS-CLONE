import { useContext } from 'react';
import { ArrowLeftIcon, CreateNewChatIcon } from '../../assets/icons/icons';
import { SelectedUsersContext } from '../../context/SelectedUsersContext';
import './CreateButton.scss';

interface CreateButtonpProps {
  isSearchMode: boolean,
  isGroupCreationMode: boolean,
  isGroupInfo: boolean,
  handleClick: () => void,
  groupName: string
}

function CreateButton({
  isSearchMode, handleClick, isGroupCreationMode, isGroupInfo, groupName,
}: CreateButtonpProps) {
  const { selectedUsers } = useContext(SelectedUsersContext);
  return (
    <button
      type="button"
      className={`icon-button ${!isSearchMode
        || (isGroupInfo && groupName.length)
        || (isGroupCreationMode && selectedUsers.length && !isGroupInfo)
        ? '' : 'hidden'}`}
      onClick={handleClick}
    >
      {isGroupCreationMode || isGroupInfo ? <ArrowLeftIcon /> : <CreateNewChatIcon />}
    </button>
  );
}

export default CreateButton;
