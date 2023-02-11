import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ActiveChatContextProvider } from './context/ActiveChatContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <AuthContextProvider>
    <ActiveChatContextProvider>
      <App />
    </ActiveChatContextProvider>
  </AuthContextProvider>,
);
