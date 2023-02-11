import { ReactComponent as CheckMark } from '../../assets/icons/check-solid.svg';
import './BubblesMessage.scss';

export default function BubblesMessage(props: {
  message: string,
  time: string,
  isRead: boolean,
  isCurrenUser: boolean
}) {
  const {
    message,
    time,
    isRead,
    isCurrenUser,
  } = props;

  let firstCheckMark;
  let secondCheckMark;

  if (isCurrenUser) {
    firstCheckMark = <CheckMark className="bubble__check-mark" />;
    if (isRead) {
      secondCheckMark = <CheckMark className="bubble__check-mark second-check" />;
    }
  }

  return (
    <div className={isCurrenUser ? 'bubble__user-message' : 'bubble__user-message another-user'}>
      <span className="message">{message}</span>
      <div className="bubble__time-n-check-wrapper">
        <span className="bubble__time">{time}</span>
        {firstCheckMark}
        {secondCheckMark}
      </div>
    </div>
  );
}
