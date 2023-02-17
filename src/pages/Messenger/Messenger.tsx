import { useContext } from 'react';
import Chat from '../../components/Chat/Chat';
import Sidebar from '../../components/Sidebar/Sidebar';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { SendImageContext } from '../../context/SendImageContext';
import { ActiveVisibilitySidebar } from '../../context/VisibleSidebarContext';
import './Messenger.scss';

function Messenger() {
  const { popap } = useContext(SendImageContext);
  const { isActiveSidebar, setActiveSidebar } = useContext(ActiveVisibilitySidebar);
  const { activeChatID } = useContext(ActiveChatContext);

  window.addEventListener('resize', () => {
    if (window.innerWidth > 920) {
      setActiveSidebar(true);
    } else if (activeChatID === '') {
      setActiveSidebar(true);
    } else {
      setActiveSidebar(false);
    }
  });

  return (
    <div className="messenger">
      {popap && <div className="blackout" />}
      {isActiveSidebar ? <Sidebar sidebarClass="sidebar" /> : <Sidebar sidebarClass="sidebar hide-sidebar" />}
      {isActiveSidebar ? <Chat chatClass="chat hide-chat" /> : <Chat chatClass="chat" />}
    </div>
  );
}

export default Messenger;
