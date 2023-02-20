import { useState, useEffect } from 'react';
import { ReactComponent as CheckMark } from '../../assets/icons/check-solid.svg';
import './BubblesMessage.scss';

export default function BubblesMessage(props: {
  message: string,
  time: string,
  isRead: boolean,
  isCurrenUser: boolean,
  imageUrl: string,
}) {
  const {
    message,
    time,
    isRead,
    isCurrenUser,
    imageUrl,
  } = props;

  let firstCheckMark;
  let secondCheckMark;

  if (isCurrenUser) {
    firstCheckMark = <CheckMark className="bubble__check-mark" />;
    if (isRead) {
      secondCheckMark = <CheckMark className="bubble__check-mark second-check" />;
    }
  }

  const [isImageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (imageUrl) {
      const img = new Image();
      img.onload = () => {
        setImageLoaded(true);
      };
      img.src = imageUrl;
    }
  }, [imageUrl]);

  return (
    <div className={isCurrenUser ? 'bubble__user-message' : 'bubble__user-message another-user'}>
      {imageUrl && <img className="img" src={imageUrl} alt="" />}
      {(!imageUrl || isImageLoaded) && (
        <>
          <span className="message">{message}</span>
          <div className="bubble__time-n-check-wrapper">
            <span className="bubble__time">{time}</span>
            {firstCheckMark}
            {secondCheckMark}
          </div>
        </>
      )}
    </div>
  );
}
