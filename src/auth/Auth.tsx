import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';

interface IProps {
  children: JSX.Element
}

function AuthRoute(props: IProps) {
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
