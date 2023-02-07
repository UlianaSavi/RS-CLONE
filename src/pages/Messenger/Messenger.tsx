import { useState } from 'react';
import Chat from '../../components/Chat/Chat';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Messenger.scss';

function Messenger() {
  const [activeChat, setActiveChat] = useState(0);
  console.log(activeChat);

  return (
    <div className="messenger">
      <Sidebar
        activeChat={activeChat}
        setActiveChat={setActiveChat}
      />
      <Chat activeChat={activeChat} />
    </div>
  );
}

export default Messenger;
