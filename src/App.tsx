import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Form from './pages/Form/Form';
import Messenger from './pages/Messenger/Messenger';
import AuthRoute from './auth/Auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute><Messenger /></AuthRoute>,
  },
  {
    path: '/login',
    element: <Form mode="login-email" />,
  },
  {
    path: '/register',
    element: <Form mode="register-email" />,
  },
]);

function App() {
  return (
    <section className="container">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
