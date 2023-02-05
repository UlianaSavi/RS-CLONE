/* eslint-disable no-undef */
import './PopupMenuItem.scss';

interface PopupMenuItemProps {
  label: string,
  icon: JSX.Element
}

function PopupMenuItem({ label, icon }: PopupMenuItemProps) {
  return (
    <div className="popap-item-wrapper">
      {icon}
      <span>{label}</span>
    </div>
  );
}

export default PopupMenuItem;
