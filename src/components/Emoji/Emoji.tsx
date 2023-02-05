import './Emoji.scss';
import smileIcon from '../../assets/icons/smile-icon.png';

function Emoji() {
  return (
    <div className="emoji">
      <img src={smileIcon} alt="emoji" height={32} width={32} />
    </div>
  );
}

export default Emoji;
