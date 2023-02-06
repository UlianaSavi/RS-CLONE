import { CreateNewChatIcon } from '../../assets/icons/icons';
import './CreateButton.scss';

function CreateButton() {
  return (
    <button type="button" className="create-button">
      <CreateNewChatIcon />
    </button>
  );
}

export default CreateButton;
