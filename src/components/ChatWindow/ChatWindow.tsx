import './ChatWindow.scss';
import { ReactComponent as MessageTriangle } from '../../assets/icons/messtr.svg';

function ChatWindow() {
  return (
    <div className="chat-window">
      <div className="chat-window__wrapper">
        <section className="bubbles-date-group">
          <div className="bubbles-date-group__date">Today</div>
          <div className="bubbles-date-group__messages-wrapper">
            <div className="bubbles-date-group__user-message-wrapper">
              <div className="bubbles-date-group__user-message-container">
                <div className="bubbles-date-group__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas totam aspernatur quis earum, suscipit mollitia incidunt facere molestiae ducimus quos iste illo harum corrupti eveniet magnam delectus dicta? Voluptatibus, a.</div>
              </div>
              <MessageTriangle className="bubbles-date-group__message-triangle" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ChatWindow;
