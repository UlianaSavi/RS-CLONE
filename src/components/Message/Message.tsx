import Avatar from '../Avatar/Avatar';
import './Message.scss';

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
    </div>
  );
}

export default Message;
