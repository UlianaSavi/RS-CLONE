import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Form from './pages/Form/Form';
import Messenger from './pages/Messenger/Messenger';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Form mode="login-phone" />,
  },
  {
    path: '/login-email',
    element: <Form mode="login-email" />,
  },
  {
    path: '/register-phone',
    element: <Form mode="register-phone" />,
  },
  {
    path: '/register-email',
    element: <Form mode="register-email" />,
  },
  {
    path: '/messenger',
    element: <Messenger />,
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
