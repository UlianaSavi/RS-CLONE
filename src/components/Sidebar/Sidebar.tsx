import { useState } from 'react';
import CreateButton from '../CreateButton/CreateButton';
import SettingsSidebar from '../ForSettingsSidebar/SettingsSidebar';
import SettingsMenu from '../SettingsPopap/SettingsPopap';
import SidebarContent from '../SidebarContent/SidebarContent';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import './Sidebar.scss';

interface SidebarProps {
  activeChatId: number,
  setActiveChatId: React.Dispatch<React.SetStateAction<number>>
}

function Sidebar({ activeChatId, setActiveChatId }: SidebarProps) {
  const [isActivePopup, setActivePopup] = useState(false);
  const [isSettings, setSettings] = useState(false);

  function flipFlop() {
    setActivePopup(!isActivePopup);
  }

  function changeSidebar() {
    if (isSettings) {
      setSettings(false);
    } else {
      setSettings(true);
    }
  }

  return (
    <div className="sidebar">
      {
          isSettings ? <SettingsSidebar onSidebarChange={() => changeSidebar()} />
            : (
              <>
                <SidebarHeader callback={() => flipFlop()} />
                <SidebarContent
                  activeChatId={activeChatId}
                  setActiveChatId={setActiveChatId}
                />
                <CreateButton />
                <SettingsMenu
                  isOpen={isActivePopup}
                  onClose={() => setActivePopup(false)}
                  onSidebarChange={() => changeSidebar()}
                />
              </>
            )
        }
    </div>
  );
}

export default Sidebar;
