import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  doc, setDoc, getDoc, updateDoc, arrayUnion, deleteDoc, deleteField, serverTimestamp, Timestamp,
} from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import type { User } from 'firebase/auth';
import { auth, db, storage } from '../firebaseConfig';

export const MAIN_GROUP_CHAT_ID = 'g_6j5jkb5JQJrT4xkArXtq';
export const MAIN_GROUP_CHAT_NAME = 'Launge';
export const MAIN_GROUP_CHAT_PHOTO = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Qjtp0fWNnqp0cR4tp6a7PAOiObojZG9d-A&usqp=CAU';

const loadProfilePhoto = async (name: string, avatar: File | null, user = auth.currentUser) => {
  const storageRef = ref(storage, `${name}${Math.floor(100000 + Math.random() * 900000)}`);
  const uploadTask = uploadBytesResumable(storageRef, avatar as File);

  if (avatar) {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        return progress;
      },
      (error) => {
        throw error;
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          if (user) {
            await updateProfile(user, {
              photoURL: downloadURL,
            });
            await updateDoc(doc(db, 'users', user.uid), {
              photoURL: downloadURL,
            });
          }
          return downloadURL;
        });
      },
    );
  }
  return getDownloadURL((await uploadTask).ref);
};

export const setOfflineStatus = async (user: User) => {
  await updateDoc(doc(db, 'users', user.uid), {
    isOnline: false,
    lastVisitAt: serverTimestamp(),
  });
};

export const setOnlineStatus = async (user: User) => {
  await updateDoc(doc(db, 'users', user.uid), {
    isOnline: true,
  });
};

export const singUp = async (
  name: string,
  email: string,
  password: string,
  avatar: File | null,
) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      displayName: name,
      email,
      photoURL: '',
      isOnline: true,
      lastVisitAt: serverTimestamp(),
    });

    await setDoc(doc(db, 'userChats', user.uid), {});
    await setDoc(doc(db, 'userGroups', user.uid), {});

    const groupChat = await getDoc(doc(db, 'chats', MAIN_GROUP_CHAT_ID));
    const groupMessages = groupChat.data()?.messages;
    const lastMessage = groupMessages[groupMessages.length - 1];

    await updateDoc(doc(db, 'userGroups', user.uid), {
      [`${MAIN_GROUP_CHAT_ID}.groupInfo`]: {
        displayName: MAIN_GROUP_CHAT_NAME,
        photoURL: MAIN_GROUP_CHAT_PHOTO,
      },
      [`${MAIN_GROUP_CHAT_ID}.lastMessage`]: {
        text: lastMessage.text || '',
        date: lastMessage.date || '',
      },
      [`${MAIN_GROUP_CHAT_ID}.unreadMessages`]: 0,
    });

    await updateDoc(doc(db, 'chats', MAIN_GROUP_CHAT_ID), {
      members: arrayUnion({
        [user.uid]: true,
      }),
    });

    await updateProfile(user, {
      displayName: name,
    });

    await loadProfilePhoto(name, avatar, user);
  } catch (error) {
    console.error(error);
  }
};

export const singIn = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { user } = userCredential;
      setOnlineStatus(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const logOut = async () => {
  await setOfflineStatus(auth.currentUser as User);

  signOut(auth).then(() => {
    console.log('Sign-out successful.');
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
};

export const changeProfileName = async (newName: string) => {
  if (newName && auth.currentUser) {
    await updateProfile(auth.currentUser, {
      displayName: newName,
    });
    await updateDoc(doc(db, 'users', auth.currentUser.uid), {
      displayName: newName,
    });
  }
};

export const changeProfileBio = async (newBio: string) => {
  if (newBio && auth.currentUser) {
    await updateDoc(doc(db, 'users', auth.currentUser.uid), {
      bio: newBio,
    });

    const user = await getDoc(doc(db, 'users', auth.currentUser.uid));

    return user.data() || null;
  }
  return null;
};

export const changeProfilePhoto = async (
  name: string,
  photoList: FileList | null,
) => {
  if (photoList && auth.currentUser) {
    const avatar = photoList[0];

    return loadProfilePhoto(name, avatar);
  }
  return null;
};

export const deleteChat = async (
  chatID: string,
  currentUserID: string,
  userID: string,
  forBoth: boolean,
) => {
  await updateDoc(doc(db, 'userChats', currentUserID), {
    [chatID]: deleteField(),
  });

  if (forBoth) {
    await deleteDoc(doc(db, 'chats', chatID));
    await updateDoc(doc(db, 'userChats', userID), {
      [chatID]: deleteField(),
    });
  }
};

export const loadMessagePhoto = async (image: File | null) => {
  const storageRef = ref(storage, `chat_image_${Math.floor(Date.now() + Math.random() * 900000)}`);
  const uploadTask = uploadBytesResumable(storageRef, image as File);

  if (image) {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        return progress;
      },
      (error) => {
        throw error;
      },
    );
  }

  return getDownloadURL((await uploadTask).ref);
};

export const sendMessage = async (
  messageText: string,
  currentUser: User,
  activeChatID: string,
  userID: string,
  file?: File | null,
) => {
  let imageUrl;
  if (file) {
    imageUrl = await loadMessagePhoto(file);
  }

  await updateDoc(doc(db, 'chats', activeChatID), {
    messages: arrayUnion({
      id: Math.floor(10000000000 + Math.random() * 90000000000),
      text: messageText,
      senderID: currentUser.uid,
      date: Timestamp.now(),
      ...(imageUrl && { imageUrl }),
    }),
  });

  if (activeChatID !== userID) {
    // Private chat
    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [`${activeChatID}.lastMessage`]: {
        text: messageText || 'Photo',
        date: serverTimestamp(),
      },
    });

    const chats = await getDoc(doc(db, 'userChats', userID));
    const data = chats.data();
    if (!data) return;
    let { unreadMessages } = data[activeChatID];

    await updateDoc(doc(db, 'userChats', userID), {
      [`${activeChatID}.lastMessage`]: {
        text: messageText || 'Photo',
        date: serverTimestamp(),
      },
      [`${activeChatID}.unreadMessages`]: unreadMessages += 1,
    });
  } else {
    // Group chat
    await updateDoc(doc(db, 'userGroups', currentUser.uid), {
      [`${activeChatID}.lastMessage`]: {
        text: messageText || 'Photo',
        date: serverTimestamp(),
      },
    });

    const res = await getDoc(doc(db, 'chats', activeChatID));
    const data = res.data();
    if (!data) return;
    const membersArr = data.members.map((member: {[key: string]: boolean}) => {
      if (Object.values(member)[0]) return Object.keys(member)[0];
      return null;
    });

    const promises = membersArr.map(async (memberID: string) => {
      const groups = await getDoc(doc(db, 'userGroups', memberID));
      const groupsData = groups.data();
      if (!groupsData) return;
      let { unreadMessages } = groupsData[activeChatID];
      if (Number.isNaN(unreadMessages)) unreadMessages = 0;

      await updateDoc(doc(db, 'userGroups', memberID), {
        [`${activeChatID}.lastMessage`]: {
          text: messageText || 'Photo',
          date: serverTimestamp(),
        },
        [`${activeChatID}.unreadMessages`]: unreadMessages += 1,
      });
    });
    Promise.all(promises);
  }
};

export const activateChat = async (
  currentUser: User,
  userID: string,
  activeChatID: string,
  setActiveChatID: React.Dispatch<React.SetStateAction<string>>,
) => {
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

export const createNewGroup = async (
  members: string[],
  groupName: string,
  photoURL: string,
  admin: string,
) => {
  const membersArr = members.map((memberID) => ({
    [memberID]: true,
  }));
  const groupID = `${groupName}${Math.floor(100000 + Math.random() * 900000)}`;

  await setDoc(doc(db, 'chats', groupID), {
    members: membersArr,
    messages: [],
    name: groupName,
    photoURL,
    admin,
  });

  const promises = members.map(async (memberID: string) => {
    await updateDoc(doc(db, 'userGroups', memberID), {
      [`${groupID}.groupInfo`]: {
        displayName: groupName,
        photoURL,
        groupID,
      },
      [`${groupID}.lastMessage`]: {
        text: 'You have been added to the group',
        date: serverTimestamp(),
      },
      [`${groupID}.unreadMessages`]: 0,
    });
  });
  Promise.all(promises);
};

export const changeGroupPhoto = async (
  photoList: FileList | null,
) => {
  if (photoList && auth.currentUser) {
    const avatar = photoList[0];

    const storageRef = ref(storage, `group_${Math.floor(Date.now() + Math.random() * 900000)}`);
    const uploadTask = uploadBytesResumable(storageRef, avatar as File);

    if (avatar) {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          return progress;
        },
        (error) => {
          throw error;
        },
      );
    }

    return getDownloadURL((await uploadTask).ref);
  }
  return '';
};
