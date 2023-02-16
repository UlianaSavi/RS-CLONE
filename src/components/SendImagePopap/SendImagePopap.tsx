import {
  arrayUnion, doc, serverTimestamp, Timestamp, updateDoc,
} from '@firebase/firestore';
import { useState, useEffect, useContext } from 'react';
import { CloseIcon, MoreIcon } from '../../assets/icons/icons';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import { db } from '../../firebaseConfig';
import { User } from '../../types';
import './SendImagePopap.scss';

function SendImagePopap({ imageUrl }: { imageUrl: string}) {
  const currentUser: User = useContext(AuthContext) as User;
  const { activeChatID } = useContext(ActiveChatContext);
  const { userID } = useContext(UserContext);
  const [isActivePopup, setActivePopup] = useState(true);

  function closePopap() {
    setActivePopup(!isActivePopup);
  }

  const sendImage = async () => {
    await updateDoc(doc(db, 'chats', activeChatID), {
      messages: arrayUnion({
        id: Math.floor(10000000000 + Math.random() * 90000000000),
        text: '',
        senderID: currentUser.uid,
        date: Timestamp.now(),
        photoUrl: imageUrl,
      }),
    });

    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [`${activeChatID}.lastMessage`]: {
        text: '',
        date: serverTimestamp(),
        photoUrl: imageUrl,
      },
    });

    await updateDoc(doc(db, 'userChats', userID), {
      [`${activeChatID}.lastMessage`]: {
        text: '',
        date: serverTimestamp(),
        photoUrl: imageUrl,
      },
    });
  };

  const sendImageIntoChat = async () => {
    await sendImage();
    closePopap();
  };

  useEffect(() => {
    closePopap();
  }, [imageUrl]);

  return (
    <div className={isActivePopup && imageUrl ? 'image-popap active' : 'image-popap'}>
      <div className="image-popap__header">
        <CloseIcon callback={() => closePopap()} />
        <span className="image-popap__header__title">Send Photo</span>
        <MoreIcon />
      </div>
      <img className="img" src={imageUrl} alt="sending" />
      <button className="image-popap__send-button" type="button" onClick={sendImageIntoChat}>Send</button>
    </div>
  );
}

export default SendImagePopap;
