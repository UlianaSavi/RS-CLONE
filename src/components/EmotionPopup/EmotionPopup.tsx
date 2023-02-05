import './EmotionPopup.scss';
import smileIcon from '../../assets/icons/smile-icon.png';

interface EmotionPopupProps {
  isVisible: boolean
}

function EmotionPopup({ isVisible }: EmotionPopupProps) {
  return (
    <div className={`emotion-popup ${isVisible ? 'active' : ''}`}>
      <img src={smileIcon} alt="smile" height={150} width={150} />
    </div>
  );
}

export default EmotionPopup;
