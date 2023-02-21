/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useContext } from 'react';
import Chat from '../../components/Chat/Chat';
import Sidebar from '../../components/Sidebar/Sidebar';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { ModalPhotoContext } from '../../context/ModalPhotoContext';
import { SendImageContext } from '../../context/SendImageContext';
import { ActiveVisibilitySidebar } from '../../context/VisibleSidebarContext';
import './Messenger.scss';

function Messenger() {
  const {
    popap,
    setPopap,
    setFile,
    setUrl,
  } = useContext(SendImageContext);
  const { imagePopap, setImagePopap } = useContext(ModalPhotoContext);
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

  const closePopap = () => {
    if (popap) {
      setPopap(false);
      setFile(null);
      setUrl('');
    }
    if (imagePopap) {
      setImagePopap(false);
    }
  };

  return (
    <div className="messenger">
      {(popap || imagePopap) && <div className="blackout" onClick={closePopap} />}
      {isActiveSidebar ? <Sidebar sidebarClass="sidebar" /> : <Sidebar sidebarClass="sidebar hide-sidebar" />}
      {isActiveSidebar ? <Chat chatClass="chat hide-chat" /> : <Chat chatClass="chat" />}
    </div>
  );
}

export default Messenger;
