import './Avatar.scss';
import avatarPlaceholder from '../../assets/icons/avatar-placeholder.png';

interface AvatarProps {
  image: string
}

function Avatar({ image }: AvatarProps) {
  return (
    <img
      src={image || avatarPlaceholder}
      alt="User avatar"
      className="avatar"
    />
  );
}

export default Avatar;
