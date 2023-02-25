import { ArrowLeftIcon } from '../../assets/icons/icons';
import FormInput from '../FormInput/FormInput';
import AddPhotoButton from '../AddPhotoButton/AddPhotoButton';
import './EditGroupInfo.scss';
import { changeGroupPhoto } from '../../API/api';

interface EditGroupInfoProps {
  groupName: string,
  setGroupName: React.Dispatch<React.SetStateAction<string>>,
  groupPhoto: string,
  setGroupPhoto: React.Dispatch<React.SetStateAction<string>>,
  handleBackClick: () => void
}

export default function EditGroupInfo({
  handleBackClick, groupName, setGroupName, groupPhoto, setGroupPhoto,
}: EditGroupInfoProps) {
  const changePhoto = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const photoUrl = await changeGroupPhoto(event.target.files);
    setGroupPhoto(photoUrl);
  };

  return (
    <div className="edit-profile">
      <div className="header">
        <button
          type="button"
          className="header__arrow"
          onClick={handleBackClick}
        >
          <ArrowLeftIcon />
        </button>
        <h3 className="header__text">New Group</h3>
      </div>
      <section className="edit-user-info">
        <AddPhotoButton handleChange={changePhoto} imageSrc={groupPhoto} />
        <FormInput type="text" id="name" label="Group Name" value={groupName} setValue={setGroupName} mode="edit" />
      </section>
    </div>
  );
}
