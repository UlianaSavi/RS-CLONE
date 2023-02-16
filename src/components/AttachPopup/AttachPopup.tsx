/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import './AttachPopup.scss';
import { ReactComponent as ImageNVideoIcon } from '../../assets/icons/image-n-video.svg';
import { ReactComponent as DocumentIcon } from '../../assets/icons/document.svg';

interface AttachPopupProps {
  isVisible: boolean,
  handleMouseLeave: () => void
  getPhoto: (url: string) => void
}

function AttachPopup({ isVisible, handleMouseLeave, getPhoto }: AttachPopupProps) {
  const hiddenPhotoInput = React.useRef<HTMLInputElement>(null);
  const hiddenDocInput = React.useRef<HTMLInputElement>(null);
  const [photoUrl, setPhotoUrl] = useState<string | ArrayBuffer | null>('');

  const choosePhoto = () => {
    if (hiddenPhotoInput.current) {
      hiddenPhotoInput.current.click();
    }
  };

  const chooseFile = () => {
    if (hiddenDocInput.current) {
      hiddenDocInput.current.click();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPhotoUrl(fileReader.result);
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  useEffect(() => {
    getPhoto(`${photoUrl}`);
  }, [photoUrl]);

  return (
    <nav className={`attach-popup ${isVisible ? 'active' : ''}`} onMouseLeave={handleMouseLeave}>
      <PopupMenuItem label="Photo" icon={<ImageNVideoIcon />} handleClick={choosePhoto} />
      <input className="input-file" type="file" id="uploadPhoto" ref={hiddenPhotoInput} onChange={handleChange} />
      <PopupMenuItem label="Document" icon={<DocumentIcon />} handleClick={chooseFile} />
      <input className="input-file" type="file" id="uploadFile" ref={hiddenDocInput} onChange={handleChange} />
    </nav>
  );
}

export default AttachPopup;
