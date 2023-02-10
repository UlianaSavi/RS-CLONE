import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Form from './pages/Form/Form';
import Messenger from './pages/Messenger/Messenger';
import AuthRoute from './auth/Auth';
import SettingsPage from './pages/SettingsPage/SettingsPage';

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
  {
    path: '/settings',
    element: <AuthRoute><SettingsPage /></AuthRoute>,
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
