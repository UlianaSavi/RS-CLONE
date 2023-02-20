import React, { useContext, useEffect } from 'react';
import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import './AttachPopup.scss';
import { ReactComponent as ImageNVideoIcon } from '../../assets/icons/image-n-video.svg';
import { ReactComponent as DocumentIcon } from '../../assets/icons/document.svg';
import { SendImageContext } from '../../context/SendImageContext';

interface AttachPopupProps {
  isVisible: boolean,
  handleMouseLeave: () => void
}

function AttachPopup({
  isVisible, handleMouseLeave,
}: AttachPopupProps) {
  const hiddenPhotoInput = React.useRef<HTMLInputElement>(null);
  const hiddenDocInput = React.useRef<HTMLInputElement>(null);
  const {
    setUrl,
    file,
    setFile,
    setPopap,
    setFileInfo,
  } = useContext(SendImageContext);

  const chooseImage = () => {
    if (hiddenPhotoInput.current) {
      hiddenPhotoInput.current.click();
      setFileInfo({
        fileType: 'img',
        fileSize: file ? `${(file.size / 1024).toFixed(2)} KB` : '0 KB',
        fileName: file?.name || '',
      });
    }
  };
  const chooseFile = () => {
    if (hiddenDocInput.current) {
      hiddenDocInput.current.click();
      setFileInfo({
        fileType: 'doc',
        fileSize: file ? `${(file.size / 1024).toFixed(2)} KB` : '0 KB',
        fileName: file?.name || '',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setFile((e.target.files as FileList)[0]);
        setUrl(`${fileReader.result}`);
        setPopap(true);
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (file === null && hiddenPhotoInput?.current) {
      hiddenPhotoInput.current.value = '';
    }
  }, [file, hiddenPhotoInput]);

  return (
    <nav className={`attach-popup ${isVisible ? 'active' : ''}`} onMouseLeave={handleMouseLeave}>
      <PopupMenuItem label="Photo" icon={<ImageNVideoIcon />} handleClick={chooseImage} />
      <input className="input-file" type="file" id="uploadPhoto" accept="image/*" ref={hiddenPhotoInput} onChange={handleChange} />
      <PopupMenuItem label="Document" icon={<DocumentIcon />} handleClick={chooseFile} />
      <input className="input-file" type="file" id="uploadFile" ref={hiddenDocInput} onChange={handleChange} />
    </nav>
  );
}

export default AttachPopup;
