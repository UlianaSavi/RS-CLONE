/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import './AttachPopup.scss';
import { ReactComponent as ImageNVideoIcon } from '../../assets/icons/image-n-video.svg';
import { ReactComponent as DocumentIcon } from '../../assets/icons/document.svg';

interface AttachPopupProps {
  isVisible: boolean,
  handleMouseLeave: () => void
  getPhoto: (props: { url: string, file: File }) => void
}

function AttachPopup({
  isVisible, handleMouseLeave, getPhoto,
}: AttachPopupProps) {
  const hiddenPhotoInput = React.useRef<HTMLInputElement>(null);
  const hiddenDocInput = React.useRef<HTMLInputElement>(null);
  const [photo, setPhoto] = useState<{ url: string, file: File } | null>(null);

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
    console.log(e?.target?.files);
    if (e?.target?.files) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        console.log({
          file: (e.target.files as FileList)[0],
          url: `${fileReader.result}`,
        });
        setPhoto({
          file: (e.target.files as FileList)[0],
          url: `${fileReader.result}`,
        });
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (photo) {
      getPhoto(photo);
    }
  }, [photo]);

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
