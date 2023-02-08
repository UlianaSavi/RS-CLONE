import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';

function AuthRoute(props: any) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { children } = props;

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
        navigate('/');
      } else {
        console.log('Unauthorized');
        navigate('/register');
      }
    });

    return () => AuthCheck();
  }, [auth]);

  if (loading) return <p>loading ...</p>;

  return children;
}
export default AuthRoute;
