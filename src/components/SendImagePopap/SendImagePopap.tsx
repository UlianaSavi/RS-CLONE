import './SendImagePopap.scss';

function SendImagePopap({ imageUrl }: { imageUrl: string}) {
  return (
    <div className={imageUrl ? 'image-popap active' : 'image-popap'}>
      <div className="image-popap__header">
        <span className="image-popap__header__title">Send Photo</span>
      </div>
      <img className="img" src={imageUrl} alt="sending" />
    </div>
  );
}

export default SendImagePopap;
