import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useContext } from 'react';
import Form from './pages/Form/Form';
import Messenger from './pages/Messenger/Messenger';
import AuthRoute from './auth/Auth';
import { AuthContext } from './auth/AuthContext';
import type { User } from './types';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute><Messenger /></AuthRoute>,
  },
  {
    path: '/login',
    element: <AuthRoute><Form mode="login-email" /></AuthRoute>,
  },
  {
    path: '/register',
    element: <AuthRoute><Form mode="register-email" /></AuthRoute>,
  },
]);

function App() {
  const currentUser: User = useContext(AuthContext) as User;
  console.log(currentUser);

  return (
    <section className="container">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
