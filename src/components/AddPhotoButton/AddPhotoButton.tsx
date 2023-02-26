/* eslint-disable no-unused-vars */
import { AddPhotoIcon } from '../../assets/icons/icons';
import avatarPlaceholder from '../../assets/icons/avatar-placeholder.png';
import './AddPhotoButton.scss';

interface AddPhotoButtonProps {
  imageSrc: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function AddPhotoButton({ handleChange, imageSrc }: AddPhotoButtonProps) {
  return (
    <div className="add-photo">
      <img className="add-photo__ava" src={imageSrc || avatarPlaceholder} alt="User" />
      <button type="button" className="add-photo__btn">
        <AddPhotoIcon />
        <input
          type="file"
          className="add-photo__input-file"
          accept=".jpg, .jpeg, .png"
          onChange={handleChange}
        />
      </button>
    </div>
  );
}

export default AddPhotoButton;
