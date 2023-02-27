import { useState, useContext } from 'react';
import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import './TopPanelSettings.scss';
import DeletionPopup from '../DeletionPopup/DeletionPopup';
import { UserContext } from '../../context/UserContext';
import {
  TrashIcon, SearchIconTopPanel,
} from '../../assets/icons/icons';

export default function TopPanelSettings(props: { isOpen: boolean, onClose: () => void }) {
  const { isOpen, onClose } = props;
  const [showDeletionPopup, setShowDeletionPopup] = useState(false);
  const { userID } = useContext(UserContext);

  const click = () => null;

  const handleDeleteBtn = () => setShowDeletionPopup(true);

  return (
    <>
      <nav className={isOpen ? 'top-panel-popup active' : 'top-panel-popup'} id="top-panel-popup" onMouseLeave={() => onClose()}>
        <div className="search-wrapper">
          <PopupMenuItem label="Search" icon={<SearchIconTopPanel />} handleClick={click} />
        </div>
        <PopupMenuItem label="Delete chat" icon={<TrashIcon />} handleClick={handleDeleteBtn} />
      </nav>
      <DeletionPopup
        isVisible={showDeletionPopup}
        setVisibility={setShowDeletionPopup}
        userIdToDelete={userID}
      />
    </>
  );
}
