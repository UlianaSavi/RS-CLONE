import { useContext } from 'react';
import Chat from '../../components/Chat/Chat';
import ModalPhoto from '../../components/ModalPhoto/ModalPhoto';
import Sidebar from '../../components/Sidebar/Sidebar';
import UserSidebar from '../../components/UserSidebar/UserSidebar';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { ModalPhotoContext } from '../../context/ModalPhotoContext';
import { SendImageContext } from '../../context/SendImageContext';
import { UserSidebarContext } from '../../context/UserSidebarContext';
import { ThemeContext } from '../../context/ThemeContext';
import { ActiveVisibilitySidebar } from '../../context/VisibleSidebarContext';
import './Messenger.scss';

function Messenger() {
  const {
    popap,
    setPopap,
    setFile,
    setUrl,
  } = useContext(SendImageContext);
  const { url, imagePopap, setImagePopap } = useContext(ModalPhotoContext);

  const { isActiveSidebar, setActiveSidebar } = useContext(ActiveVisibilitySidebar);
  const { userSidebar } = useContext(UserSidebarContext);
  const { activeChatID } = useContext(ActiveChatContext);
  const { isDark } = useContext(ThemeContext);

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
    <div className={isDark ? 'messenger-container dark' : 'messenger-container light'}>
      <div className="messenger">
        {(popap || imagePopap) && <button type="button" aria-label="Blackout" className="blackout" onClick={closePopap} />}
        {isActiveSidebar ? <Sidebar sidebarClass="sidebar" /> : <Sidebar sidebarClass="sidebar hide-sidebar" />}
        {isActiveSidebar ? <Chat chatClass="chat hide-chat" /> : <Chat chatClass="chat" />}
        {userSidebar && <UserSidebar /> }
        {imagePopap && <ModalPhoto imageUrl={url} />}
      </div>
    </div>
  );
}

export default Messenger;
