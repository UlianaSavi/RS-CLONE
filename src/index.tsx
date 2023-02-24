import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ActiveChatContextProvider } from './context/ActiveChatContext';
import { UserContextProvider } from './context/UserContext';
import { SendImageContextProvider } from './context/SendImageContext';
import { ActiveVisibilitySidebarProvider } from './context/VisibleSidebarContext';
import { ModalPhotoContextProvider } from './context/ModalPhotoContext';
import { ClickedEmojiProvider } from './context/ClickedEmojiContext';
import { ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <AuthContextProvider>
    <UserContextProvider>
      <ActiveChatContextProvider>
        <ActiveVisibilitySidebarProvider>
          <SendImageContextProvider>
            <ModalPhotoContextProvider>
              <ClickedEmojiProvider>
                <ThemeProvider>
                  <App />
                </ThemeProvider>
              </ClickedEmojiProvider>
            </ModalPhotoContextProvider>
          </SendImageContextProvider>
        </ActiveVisibilitySidebarProvider>
      </ActiveChatContextProvider>
    </UserContextProvider>
  </AuthContextProvider>,
);
