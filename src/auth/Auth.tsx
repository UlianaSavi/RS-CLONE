/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';

function AuthRoute(props: any) {
  const navigate = useNavigate();
  const { children } = props;
  function check() {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/register');
      }
      if (user) {
        const { uid } = user;
        if (uid) {
          navigate('/');
        }
      }
    });
    return () => AuthCheck();
  }

  onpopstate = () => {
    check();
  };

  useEffect(() => {
    check();
  }, [auth]);
  return children;
}
export default AuthRoute;
