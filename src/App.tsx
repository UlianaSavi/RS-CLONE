import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useContext } from 'react';
import Form from './pages/Form/Form';
import Messenger from './pages/Messenger/Messenger';
import AuthRoute from './auth/Auth';
import { AuthContext } from './auth/AuthContext';

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
  const currentUser = useContext(AuthContext);
  console.log(currentUser);
  return (
    <section className="container">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
