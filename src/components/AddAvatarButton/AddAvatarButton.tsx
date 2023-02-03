import React from 'react';
import '../../pages/Form/Form.scss';
import './AddAvatarButton.scss';

function AddAvatarButton() {
  return (
    <>
      <input className="add-avatar_hidden" type="file" id="avatar" />
      <label className="add-avatar" htmlFor="avatar">
        <img className="add-avatar__img" src="../../assets/img/addAvatar.png" alt="Add avatar" />
        <span className="add-avatar__label">Add an avatar</span>
      </label>
    </>
  );
}

export default AddAvatarButton;
