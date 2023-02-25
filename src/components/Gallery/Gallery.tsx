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
      console.log(activeChatID);
      onSnapshot(doc(db, 'chats', activeChatID), (d) => {
        const data = d.data();
        if (!data) {
          return;
        }
        setImagesArray(data.messages.map((message: DocumentData) => (
          message.imageUrl && <button type="button" key={message.id} onClick={() => openPopap(message.imageUrl)} className="btn"><img key={message.id} className="img" src={message.imageUrl} alt="Media in chat" /></button>
        )));
      });
    }
  }, [activeChatID]);

  return (
    <div className="gallery">
      <button type="button" className="gallery__tab">
        <span className="gallery__tab__title">Media</span>
      </button>
      <div className="gallery__images">{imagesArray}</div>
    </div>
  );
}

export default Gallery;
