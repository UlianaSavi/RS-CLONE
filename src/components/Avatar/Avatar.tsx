import './Avatar.scss';

interface AvatarProps {
  image: string
}

function Avatar({ image }: AvatarProps) {
  return (
    <img
      src={image}
      alt="User avatar"
      className="avatar"
    />
  );
}

export default Avatar;
