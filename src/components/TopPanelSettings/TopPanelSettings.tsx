import './TopPanelSettings.scss';
import TopPanelSettingsItem from '../TopPanelSettingsItem/TopPanelSettingsItem';

export default function TopPanelSettings(props: { isOpen: boolean, onClose: () => void }) {
  const { isOpen, onClose } = props;
  return (
    <nav className={isOpen ? 'top-panel-popup active' : 'top-panel-popup'} id="top-panel-popup" onMouseLeave={() => onClose()}>
      <TopPanelSettingsItem />
      <TopPanelSettingsItem />
      <TopPanelSettingsItem />
      <TopPanelSettingsItem />
      <TopPanelSettingsItem />
    </nav>
  );
}
