import React from 'react';
import Chat from '../../components/Chat/Chat';
import Popap from '../../components/SettingsMenu/SettingsMenu';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Messenger.scss';

function Messenger() {
  return (
    <div className="messenger">
      <Sidebar />
      <Chat />
      <Popap />
    </div>
  );
}

export default Messenger;
