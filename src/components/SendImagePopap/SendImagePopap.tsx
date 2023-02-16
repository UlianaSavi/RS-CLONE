import { CloseIcon, MoreIcon } from '../../assets/icons/icons';
import './SendImagePopap.scss';

function SendImagePopap({ imageUrl }: { imageUrl: string}) {
  return (
    <div className={imageUrl ? 'image-popap active' : 'image-popap'}>
      <div className="image-popap__header">
        <CloseIcon />
        <span className="image-popap__header__title">Send Photo</span>
        <MoreIcon />
      </div>
      <img className="img" src={imageUrl} alt="sending" />
    </div>
  );
}

export default SendImagePopap;
