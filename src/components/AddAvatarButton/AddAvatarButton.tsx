import '../../pages/Form/Form.scss';
import './AddAvatarButton.scss';

interface AddAvatarButtonProps {
  setValue: any;
}

function AddAvatarButton({ setValue }: AddAvatarButtonProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files as FileList;
    setValue({ file: files[0] });
  };

  return (
    <>
      <input
        className="add-avatar_hidden"
        type="file"
        id="avatar"
        onChange={handleChange}
      />
      <label className="form__button add-avatar" htmlFor="avatar">
        <span className="add-avatar__label">Add an avatar</span>
      </label>
    </>
  );
}

export default AddAvatarButton;
