import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PhoneCodeInput } from './components/PhoneCodeInput/PhoneCodeInput';
import Form from './pages/Form/Form';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Form mode="register" />,
  },
  {
    path: '/login',
    element: <Form mode="login" />,
  },
  {
    path: '/phoneCodeEnter',
    element: <PhoneCodeInput />,
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
