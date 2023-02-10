import { useState } from 'react';
import Chat from '../../components/Chat/Chat';
import SettingsSidebar from '../../components/ForSettingsSidebar/SettingsSidebar';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Messenger.scss';

function Messenger() {
  const [activeChatId, setActiveChatId] = useState(1);
  // const [typeOfSideBar, setTypeOfSideBar] = useState('chats');
  const typeOfSideBar = 'chats';

  return (
    <div className="messenger">
      {
        typeOfSideBar === 'chats'
          ? (
            <Sidebar
              activeChatId={activeChatId}
              setActiveChatId={setActiveChatId}
            />
          ) : <SettingsSidebar />
      }
      <Chat activeChatId={activeChatId} />
    </div>
  );
}

export default Messenger;
