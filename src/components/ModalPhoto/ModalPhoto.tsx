import { useContext } from 'react';
import { ModalPhotoContext } from '../../context/ModalPhotoContext';
import { CloseIcon } from '../../assets/icons/icons';
import './ModalPhoto.scss';

function ModalPhoto(props: {imageUrl: string}) {
  const { imageUrl } = props;
  const { setImagePopap } = useContext(ModalPhotoContext);

  function closePopap() {
    setImagePopap(false);
  }

  return (
    <div className="modal-img">
      <img className="img" src={imageUrl} alt="" />
      <CloseIcon callback={() => closePopap()} />
    </div>
  );
}

export default ModalPhoto;
