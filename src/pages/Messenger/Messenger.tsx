import { useContext } from 'react';
import Chat from '../../components/Chat/Chat';
import Sidebar from '../../components/Sidebar/Sidebar';
import { SendImageContext } from '../../context/SendImageContext';
import './Messenger.scss';

function Messenger() {
  const { popap } = useContext(SendImageContext);
  return (
    <div className="messenger">
      {popap && <div className="blackout" />}
      <Sidebar />
      <Chat />
    </div>
  );
}

export default Messenger;
