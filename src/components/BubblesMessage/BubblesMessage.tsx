/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect, useContext } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { ReactComponent as CheckMark } from '../../assets/icons/check-solid.svg';
import { ModalPhotoContext } from '../../context/ModalPhotoContext';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { UserContext } from '../../context/UserContext';
import { User } from '../../types';
import Avatar from '../Avatar/Avatar';
import './BubblesMessage.scss';

export default function BubblesMessage(props: {
  message: string,
  time: string,
  isRead: boolean,
  isCurrenUser: boolean,
  imageUrl: string,
  senderID: string,
}) {
  const {
    message,
    time,
    isRead,
    isCurrenUser,
    imageUrl,
    senderID,
  } = props;

  const { activeChatID } = useContext(ActiveChatContext);
  const { userID } = useContext(UserContext);

  let firstCheckMark;
  let secondCheckMark;

  if (isCurrenUser) {
    firstCheckMark = <CheckMark className="bubble__check-mark" />;
    if (isRead) {
      secondCheckMark = <CheckMark className="bubble__check-mark second-check" />;
    }
  }

  const [isImageLoaded, setImageLoaded] = useState(false);
  const { setUrl, setImagePopap } = useContext(ModalPhotoContext);
  const [senderData, setSenderData] = useState<User | null>(null);

  useEffect(() => {
    if (imageUrl) {
      const img = new Image();
      img.onload = () => {
        setImageLoaded(true);
      };
      img.src = imageUrl;
    }
  }, [imageUrl]);

  const findImail = (messageText: string) => {
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    const textWithLink = messageText.replace(regex, '<a target="_blank" class="link" href="$&">$&</a>');
    return { __html: textWithLink };
  };

  const openPopap = (currentImgUrl: string) => {
    setUrl(currentImgUrl);
    setImagePopap(true);
  };

  const getSenderData = async () => {
    const user = await getDoc(doc(db, 'users', senderID));
    const data = user.data() as User;
    setSenderData(data);
  };

  useEffect(() => {
    if (activeChatID === userID) {
      getSenderData();
    }
  }, []);

  return (
    <div className={`bubble__user-message-wrapper ${isCurrenUser ? '' : 'another-user'}`}>
      {!isCurrenUser && activeChatID === userID && <Avatar image={senderData?.photoURL || ''} />}
      <div className={isCurrenUser ? 'bubble__user-message' : 'bubble__user-message another-user'}>
        {!isCurrenUser && activeChatID === userID && <div className="bubble__username">{senderData?.displayName}</div>}
        {imageUrl && <img className={`img ${activeChatID === userID ? 'in-group' : ''}`} onClick={() => openPopap(imageUrl)} src={imageUrl} alt="" />}
        {(!imageUrl || isImageLoaded) && (
          <>
            <span className="message" dangerouslySetInnerHTML={findImail(message)} />
            <div className="bubble__time-n-check-wrapper">
              <span className="bubble__time">{time}</span>
              {firstCheckMark}
              {secondCheckMark}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
