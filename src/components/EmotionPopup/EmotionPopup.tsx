import './EmotionPopup.scss';
import { useContext } from 'react';
import { emojisArray } from './emojies';
import { clickedEmoji } from '../../context/ClickedEmojiContext';

interface EmotionPopupProps {
  isVisible: boolean,
  handleMouseLeave: () => void
}

function EmotionPopup({ isVisible, handleMouseLeave }: EmotionPopupProps) {
  const { setClickedEmoji } = useContext(clickedEmoji);

  const emojiArrPopup = emojisArray.map((item, index) => <li className="emotion-popup__emoji" key={item} id={`emoji-${index}`} onClick={() => setClickedEmoji(item)} role="presentation">{String.fromCodePoint(parseInt(item, 16))}</li>);

  return (
    <div className={`emotion-popup ${isVisible ? 'active' : ''}`} onMouseLeave={handleMouseLeave}>
      {emojiArrPopup}
    </div>
  );
}

export default EmotionPopup;
