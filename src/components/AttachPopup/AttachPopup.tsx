import React from 'react';
import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import './AttachPopup.scss';
import { ReactComponent as ImageNVideoIcon } from '../../assets/icons/image-n-video.svg';
import { ReactComponent as DocumentIcon } from '../../assets/icons/document.svg';

interface AttachPopupProps {
  isVisible: boolean,
  handleMouseLeave: () => void
}

function AttachPopup({ isVisible, handleMouseLeave }: AttachPopupProps) {
  const hiddenPhotoInput = React.useRef<HTMLInputElement>(null);

  const click = () => {
    if (hiddenPhotoInput.current) {
      hiddenPhotoInput.current.click();
    }
  };

  const handleChange = () => null;

  return (
    <nav className={`attach-popup ${isVisible ? 'active' : ''}`} onMouseLeave={handleMouseLeave}>
      <PopupMenuItem label="Photo" icon={<ImageNVideoIcon />} handleClick={click} />
      <input className="input-file" type="file" id="upload" name="upload" ref={hiddenPhotoInput} onChange={handleChange} />
      <PopupMenuItem label="Document" icon={<DocumentIcon />} />
    </nav>
  );
}

export default AttachPopup;
