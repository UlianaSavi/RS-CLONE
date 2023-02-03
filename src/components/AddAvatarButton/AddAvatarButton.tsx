import '../../pages/Form/Form.scss';
import avatarPlaceholder from '../../assets/img/addAvatar.png';
import './AddAvatarButton.scss';

function AddAvatarButton() {
  return (
    <>
      <input className="add-avatar_hidden" type="file" id="avatar" />
      <label className="add-avatar" htmlFor="avatar">
        <img className="add-avatar__img" src={avatarPlaceholder} alt="Add avatar" />
        <span className="add-avatar__label">Add an avatar</span>
      </label>
    </>
  );
}

export default AddAvatarButton;
