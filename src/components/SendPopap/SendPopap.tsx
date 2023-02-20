import {
  useState, useContext, useRef,
} from 'react';
import styled from 'styled-components';
import {
  doc, serverTimestamp, updateDoc, arrayUnion, Timestamp, setDoc, getDoc,
} from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { SendImageContext } from '../../context/SendImageContext';
import { UserContext } from '../../context/UserContext';
import { db } from '../../firebaseConfig';
import { loadMessageFile } from '../../API/api';
import { User } from '../../types';
import { CloseIcon, MoreIcon } from '../../assets/icons/icons';
import { limit } from '../../constans';
import FileBlock from '../FileBlock/FileBlock';
import './SendPopap.scss';

const TextArea = styled.textarea``;

function SendPopap() {
  const [messageValue, setMessageValue] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Chat activation
  const currentUser: User = useContext(AuthContext) as User;
  const { activeChatID, setActiveChatID } = useContext(ActiveChatContext);
  const { userID } = useContext(UserContext);

  const activateChat = async () => {
    const combinedID = currentUser.uid > userID ? `${currentUser.uid}${userID}` : `${userID}${currentUser.uid}`;
    setActiveChatID(combinedID);
    const chat = await getDoc(doc(db, 'chats', activeChatID));
    const userChat = await getDoc(doc(db, 'userChats', userID));
    const currentUserChat = await getDoc(doc(db, 'userChats', currentUser.uid));

    if (!chat.exists()) {
      await setDoc(doc(db, 'chats', activeChatID), { messages: [] });
    }

    if (!userChat.get(activeChatID)) {
      await updateDoc(doc(db, 'userChats', userID), {
        [`${activeChatID}.userInfo`]: {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
          isOnline: true,
        },
        [`${activeChatID}.createdAt`]: serverTimestamp(),
        [`${activeChatID}.unreadMessages`]: 0,
      });
    }

    if (!currentUserChat.get(activeChatID)) {
      const user = await getDoc(doc(db, 'users', userID));
      const userData = user.data();

      await updateDoc(doc(db, 'userChats', currentUser.uid), {
        [`${activeChatID}.userInfo`]: {
          uid: userID,
          displayName: userData?.displayName,
          photoURL: userData?.photoURL,
          isOnline: true,
        },
        [`${activeChatID}.createdAt`]: serverTimestamp(),
        [`${activeChatID}.unreadMessages`]: 0,
      });
    }
  };

  const {
    popap,
    setPopap,
    url,
    setUrl,
    file,
    setFile,
    fileInfo,
  } = useContext(SendImageContext);

  const closePopap = async () => {
    setPopap(!popap);
    setTimeout(() => {
      setUrl('');
      setFile(null);
    }, 5000);
  };

  const sendMessage = async () => {
    await activateChat();
    const imageUrl = fileInfo.fileType === 'img' ? await loadMessageFile(file) : '';
    await updateDoc(doc(db, 'chats', activeChatID), {
      messages: arrayUnion({
        id: Math.floor(10000000000 + Math.random() * 90000000000),
        text: messageValue,
        senderID: currentUser.uid,
        date: Timestamp.now(),
        imageUrl,
        fileInfo,
      }),
    });

    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [`${activeChatID}.lastMessage`]: {
        text: messageValue !== '' ? messageValue : 'Photo',
        date: serverTimestamp(),
        imageUrl,
        fileInfo,
      },
    });

    await updateDoc(doc(db, 'userChats', userID), {
      [`${activeChatID}.lastMessage`]: {
        text: messageValue !== '' ? messageValue : 'Photo',
        date: serverTimestamp(),
        imageUrl,
        fileInfo,
      },
    });
    const chats = await getDoc(doc(db, 'userChats', userID));
    const data = chats.data();
    if (!data) return;
    let { unreadMessages } = data[activeChatID];

    await updateDoc(doc(db, 'userChats', userID), {
      [`${activeChatID}.lastMessage`]: {
        text: messageValue !== '' ? messageValue : 'Photo',
        date: serverTimestamp(),
      },
      [`${activeChatID}.unreadMessages`]: unreadMessages += 1,
    });
    await closePopap();
  };

  const handleSendMessageTextArea = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && messageValue.trim() !== '') {
      e.preventDefault();
      await sendMessage();
      setMessageValue('');
    }
    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageValue(e.target.value);
  };

  return (
    <div className="image-popap">
      <div className="image-popap__header">
        <CloseIcon callback={() => closePopap()} />
        <span className="image-popap__header__title">{fileInfo.fileType === 'img' ? 'Send photo' : 'Send file'}</span>
        <MoreIcon />
      </div>
      {
        fileInfo.fileType === 'img' ? <img className="img" src={url} alt="sending" /> : <FileBlock />
      }
      <div className="captcha">
        <TextArea
          placeholder="Add a caption..."
          className="message-input__text-area"
          id="send"
          ref={textAreaRef}
          value={messageValue}
          onKeyDown={handleSendMessageTextArea}
          onChange={handleChange}
          rows={2}
        />
        <button disabled={file ? file?.size > limit : false} className="image-popap__send-button" type="button" onClick={() => sendMessage()}>Send</button>
      </div>
    </div>
  );
}

export default SendPopap;
