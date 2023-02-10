import './SettingsHeader.scss';

function SettingsHeader() {
  return (
    <div className="settings-header">
      <button type="button" className="settings-header__close-button">Go back</button>
      <div className="settings-header__title"><span>Title</span></div>
      <button type="button" className="settings-header__edit-button">Edit</button>
      <button type="button" className="settings-header__logout-button">Log Out</button>
    </div>
  );
}

export default SettingsHeader;
