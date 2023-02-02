import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AccessForm } from './components/AccessForm/AccessForm';
import { SubmitButton } from './components/SubmitButton/SubmitButton';
import { PhoneCodeInput } from './components/PhoneCodeInput/PhoneCodeInput';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AccessForm
        children={<SubmitButton />}
        placeholder="Enter your phone"
      />
    ),
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
