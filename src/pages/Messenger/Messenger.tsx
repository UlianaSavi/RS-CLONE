import React from 'react';
import Chat from '../../components/Chat/Chat';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Messenger.scss';

function Messenger() {
  return (
    <div className="messenger">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default Messenger;
