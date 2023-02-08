import './PopupMenuItem.scss';

interface PopupMenuItemProps {
  label: string,
  icon: JSX.Element,
  handleClick: () => void
}

function PopupMenuItem({ label, icon, handleClick }: PopupMenuItemProps) {
  return (
    <button type="button" className="popup-item" onClick={handleClick}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default PopupMenuItem;
