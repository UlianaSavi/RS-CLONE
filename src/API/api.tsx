import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { auth, db, storage } from '../firebaseConfig';

export const singUp = async (
  name: string,
  email: string,
  password: string,
  avatar: File | null,
) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    const storageRef = ref(storage, `${name}${Math.floor(100000 + Math.random() * 900000)}`);
    const uploadTask = uploadBytesResumable(storageRef, avatar as File);

    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      name,
      email,
      avatarURL: '',
      isOnline: true,
    });

    if (avatar) {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
        },
        (error) => {
          throw error;
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log(downloadURL);
            await updateProfile(user, {
              photoURL: downloadURL,
            });
            await updateDoc(doc(db, 'users', user.uid), {
              avatarURL: downloadURL,
            });
          });
        },
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const singIn = async (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { user } = userCredential;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};
