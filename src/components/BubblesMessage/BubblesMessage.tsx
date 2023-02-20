import { ReactComponent as CheckMark } from '../../assets/icons/check-solid.svg';
import { IFileInfo } from '../../types';
import FileBlock from '../FileBlock/FileBlock';
import './BubblesMessage.scss';

export default function BubblesMessage(props: {
  message: string,
  time: string,
  isRead: boolean,
  isCurrenUser: boolean,
  imageUrl: string,
  fileInfo?: IFileInfo,
}) {
  const {
    message,
    time,
    isRead,
    isCurrenUser,
    imageUrl,
    fileInfo,
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
      <img className={imageUrl ? 'img' : 'img none'} src={imageUrl} alt="" />
      <div className={fileInfo?.fileType === 'doc' ? 'active' : 'none'}>
        <FileBlock fileInfo={fileInfo} />
      </div>
      <span className="message">{message}</span>
      <div className="bubble__time-n-check-wrapper">
        <span className="bubble__time">{time}</span>
        {firstCheckMark}
        {secondCheckMark}
      </div>
    </div>
  );
}
