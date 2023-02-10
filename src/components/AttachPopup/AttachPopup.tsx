import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import './AttachPopup.scss';
import { ReactComponent as ImageNVideoIcon } from '../../assets/icons/image-n-video.svg';
import { ReactComponent as DocumentIcon } from '../../assets/icons/document.svg';

interface AttachPopupProps {
  isVisible: boolean,
  handleMouseLeave: () => void
}

function AttachPopup({ isVisible, handleMouseLeave }: AttachPopupProps) {
  const click = () => null;

  return (
    <nav className={`attach-popup ${isVisible ? 'active' : ''}`} onMouseLeave={handleMouseLeave}>
      <PopupMenuItem label="Photo" icon={<ImageNVideoIcon />} handleClick={click} />
      <PopupMenuItem label="Document" icon={<DocumentIcon />} handleClick={click} />
    </nav>
  );
}

export default AttachPopup;
