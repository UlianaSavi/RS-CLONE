import Avatar from '../Avatar/Avatar';
import './Message.scss';

function Message() {
  return (
    <div className="message">
      <Avatar image="https://i.pinimg.com/564x/9e/c3/9f/9ec39f56b00c97ab0ef3a99817b27f87.jpg" />
      <div className="message__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
    </div>
  );
}

export default Message;
