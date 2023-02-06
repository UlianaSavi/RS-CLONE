import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import Form from './pages/Form/Form';
import Messenger from './pages/Messenger/Messenger';
import { firebaseConfig } from './firebase';

initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Form mode="login-phone" />,
  },
  {
    path: '/code',
    element: <Form mode="access-code" />,
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
