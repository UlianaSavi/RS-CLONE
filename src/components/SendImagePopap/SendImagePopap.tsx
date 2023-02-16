import { useState, useEffect, useContext } from 'react';
import {
  doc, serverTimestamp, updateDoc, arrayUnion, Timestamp,
} from 'firebase/firestore';
import { CloseIcon, MoreIcon } from '../../assets/icons/icons';
import './SendImagePopap.scss';
import { User } from '../../types';
import { AuthContext } from '../../context/AuthContext';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { db } from '../../firebaseConfig';
import { UserContext } from '../../context/UserContext';
import { loadMessagePhoto } from '../../API/api';

function SendImagePopap({ image: { url, file } }: { image: { url: string, file: File } }) {
  const [isActivePopup, setActivePopup] = useState(true);
  const currentUser: User = useContext(AuthContext) as User;
  const { activeChatID } = useContext(ActiveChatContext);
  const { userID } = useContext(UserContext);

  function closePopap() {
    setActivePopup(!isActivePopup);
  }

  const sendMessage = async (messageText = '') => {
    const imageUrl = await loadMessagePhoto(file);
    await updateDoc(doc(db, 'chats', activeChatID), {
      messages: arrayUnion({
        id: Math.floor(10000000000 + Math.random() * 90000000000),
        text: messageText,
        senderID: currentUser.uid,
        date: Timestamp.now(),
        imageUrl,
      }),
    });

    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [`${activeChatID}.lastMessage`]: {
        text: messageText,
        date: serverTimestamp(),
        imageUrl,
      },
    });

    await updateDoc(doc(db, 'userChats', userID), {
      [`${activeChatID}.lastMessage`]: {
        text: messageText,
        date: serverTimestamp(),
        imageUrl,
      },
    });
  };
  useEffect(() => {
    closePopap();
  }, [url]);

  return (
    <div className={isActivePopup && url ? 'image-popap active' : 'image-popap'}>
      <div className="image-popap__header">
        <CloseIcon callback={() => closePopap()} />
        <span className="image-popap__header__title">Send Photo</span>
        <MoreIcon />
      </div>
      <img className="img" src={url} alt="sending" />
      <button className="image-popap__send-button" type="button" onClick={() => sendMessage()}>Send</button>
    </div>
  );
}

export default SendImagePopap;
