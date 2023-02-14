import { CreateNewChatIcon } from '../../assets/icons/icons';
import './CreateButton.scss';

interface CreateButtonpProps {
  isVisible: boolean,
  handleClick: () => void
}

function CreateButton({ isVisible, handleClick }: CreateButtonpProps) {
  return (
    <button
      type="button"
      className={`icon-button ${isVisible ? '' : 'hidden'}`}
      onClick={handleClick}
    >
      <CreateNewChatIcon />
    </button>
  );
}

export default CreateButton;
