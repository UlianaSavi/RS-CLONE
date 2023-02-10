import { useState } from 'react';
import Chat from '../../components/Chat/Chat';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Messenger.scss';

function Messenger() {
  const [activeChatId, setActiveChatId] = useState(1);

  return (
    <div className="messenger">
      <Sidebar
        activeChatId={activeChatId}
        setActiveChatId={setActiveChatId}
      />
      <Chat activeChatId={activeChatId} />
    </div>
  );
}

export default Messenger;
