/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
import { doc, DocumentData, onSnapshot } from '@firebase/firestore';
import { useState, useContext, useEffect } from 'react';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { ModalPhotoContext } from '../../context/ModalPhotoContext';
import { db } from '../../firebaseConfig';
import './Gallery.scss';

function Gallery() {
  const { activeChatID } = useContext(ActiveChatContext);
  const { setUrl, setImagePopap } = useContext(ModalPhotoContext);
  const [imagesArray, setImagesArray] = useState([]);
  const openPopap = (currentImgUrl: string) => {
    setUrl(currentImgUrl);
    setImagePopap(true);
  };

  useEffect(() => {
    if (activeChatID) {
      onSnapshot(doc(db, 'chats', activeChatID), (d) => {
        const data = d.data();
        if (!data) {
          console.log('Hey! There are no messages here.');
          return;
        }
        setImagesArray(data.messages.map((message: DocumentData) => (
          message.imageUrl && <img className="img" onClick={() => openPopap(message.imageUrl)} src={message.imageUrl} alt="Media in chat" />
        )));
      });
    }
  }, [activeChatID]);

  return (
    <div className="gallery">
      <button className="gallery__tab">
        <span className="gallery__tab__title">Media</span>
      </button>
      <div className="gallery__images">{imagesArray}</div>
    </div>
  );
}

export default Gallery;
