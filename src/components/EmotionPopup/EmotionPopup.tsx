import './EmotionPopup.scss';
import Emoji from '../Emoji/Emoji';

interface EmotionPopupProps {
  isVisible: boolean,
  handleMouseLeave: () => void
}

function EmotionPopup({ isVisible, handleMouseLeave }: EmotionPopupProps) {
  const elements = Array.from({ length: 24 }, (_, index) => index);
  const emojiArr = elements.map((element) => <Emoji key={element} />);

  return (
    <div className={`emotion-popup ${isVisible ? 'active' : ''}`} onMouseLeave={handleMouseLeave}>
      {emojiArr}
    </div>
  );
}

export default EmotionPopup;
