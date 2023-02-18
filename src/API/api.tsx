/* eslint-disable no-console */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  doc, setDoc, updateDoc, arrayUnion, deleteDoc, deleteField, serverTimestamp,
} from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import type { User } from 'firebase/auth';
import { auth, db, storage } from '../firebaseConfig';

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
    const mainGroupChatID = 'g_6j5jkb5JQJrT4xkArXtq';

    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      displayName: name,
      email,
      photoURL: '',
      isOnline: true,
    });

    await setDoc(doc(db, 'userChats', user.uid), {});
    await setDoc(doc(db, 'userGroups', user.uid), {});

    await updateDoc(doc(db, 'userGroups', user.uid), {
      [`${mainGroupChatID}.groupInfo`]: {
        displayName: 'Launge',
        photoURL: '',
      },
      [`${mainGroupChatID}.lastMessage`]: {},
    });

    await updateDoc(doc(db, 'chats', mainGroupChatID), {
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
