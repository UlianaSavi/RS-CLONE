import './PopupMenuItem.scss';

interface PopupMenuItemProps {
  label?: string,
  icon: JSX.Element,
  title?: string,
  handleClick?: () => void
}

function PopupMenuItem({
  label, icon, title, handleClick,
}: PopupMenuItemProps) {
  return (
    <button type="button" className="popup-item" onClick={handleClick}>
      {icon}
      <span>{label}</span>
      {
        title ? <span className="popup-item__title">{title}</span> : <span />
      }
    </button>
  );
}

export default PopupMenuItem;
