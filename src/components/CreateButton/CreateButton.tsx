import { CreateNewChatIcon } from '../../assets/icons/icons';
import './CreateButton.scss';

interface CreateButtonpProps {
  handleClick: () => void
}

function CreateButton({ handleClick }: CreateButtonpProps) {
  return (
    <button type="button" className="icon-button" onClick={handleClick}>
      <CreateNewChatIcon />
    </button>
  );
}

export default CreateButton;
