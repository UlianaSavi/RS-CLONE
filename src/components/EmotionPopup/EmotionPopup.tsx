import './EmotionPopup.scss';
import { emojisArray } from './emojies';

interface EmotionPopupProps {
  isVisible: boolean,
  handleMouseLeave: () => void
}

function EmotionPopup({ isVisible, handleMouseLeave }: EmotionPopupProps) {
  const emojiArrPopup = emojisArray.map((item) => <li className={`emotion-popup__emoji ${item.id}`}>{String.fromCodePoint(parseInt(item.unicode, 16))}</li>);

  return (
    <div className={`emotion-popup ${isVisible ? 'active' : ''}`} onMouseLeave={handleMouseLeave}>
      {emojiArrPopup}
    </div>
  );
}

export default EmotionPopup;
