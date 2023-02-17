import { useContext } from 'react';
import Chat from '../../components/Chat/Chat';
import Sidebar from '../../components/Sidebar/Sidebar';
import { SendImageContext } from '../../context/SendImageContext';
import { ActiveVisibilitySidebar } from '../../context/VisibleSidebar';
import './Messenger.scss';

function Messenger() {
  const { popap } = useContext(SendImageContext);
  const { isActiveSidebar } = useContext(ActiveVisibilitySidebar);
  return (
    <div className="messenger">
      {popap && <div className="blackout" />}
      {isActiveSidebar ? <Sidebar /> : ''}
      <Chat />
    </div>
  );
}

export default Messenger;
