import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const signInWithGoogle = async () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  setAuthing(true);

  signInWithPopup(auth, new GoogleAuthProvider())
    .then((response) => {
      console.log(response.user.uid);
      navigate('/');
    })
    .catch((error) => {
      console.log(error, authing);
      setAuthing(false);
    });
};
