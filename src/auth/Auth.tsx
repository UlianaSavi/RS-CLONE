import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';

function AuthRoute(props: any) {
  const navigate = useNavigate();
  const { children } = props;

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid } = user;
        if (uid) {
          navigate('/');
        }
      } else {
        console.log('Unauthorized');
        navigate('/register');
      }
    });

    return () => AuthCheck();
  }, [auth]);

  return children;
}
export default AuthRoute;
