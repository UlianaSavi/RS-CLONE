import { ArrowLeftIcon } from '../../assets/icons/icons';
import './SidebarCloseButton.scss';

interface SidebarCloseButtonProps {
  handleClick: () => void
}

function SidebarCloseButton({ handleClick }: SidebarCloseButtonProps) {
  return (
    <button
      type="button"
      className="sidebar-close-button"
      onClick={handleClick}
    >
      <ArrowLeftIcon />
    </button>
  );
}

export default SidebarCloseButton;
