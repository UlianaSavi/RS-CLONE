import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { setOnlineStatus, setOfflineStatus } from '../API/api';

interface IProps {
  children: JSX.Element
}

export const handleBeforeUnload = () => {
  if (auth.currentUser) {
    setOfflineStatus(auth.currentUser);
  }
};

function AuthRoute(props: IProps) {
  const navigate = useNavigate();
  window.addEventListener('beforeunload', handleBeforeUnload);
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
          setOnlineStatus(user);
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
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [auth]);
  return children;
}
export default AuthRoute;
