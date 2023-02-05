import './ChatWindow.scss';
// import { ReactComponent as MessageTriangle } from '../../assets/icons/messtr.svg';

function ChatWindow() {
  return (
    <div className="chat-window">
      <div className="chat-window__wrapper">
        <section className="bubbles-date-group">
          <div className="bubbles-date-group__date">Today</div>
          <div className="bubbles-date-group__messages-wrapper">
            <div className="bubbles-date-group__user-message-wrapper">
              <div className="bubbles-date-group__user-message">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas totam aspernatur quis earum, suscipit mollitia incidunt facere molestiae ducimus quos iste illo harum corrupti eveniet magnam delectus dicta? Voluptatibus, a.</div>
              <div className="bubbles-date-group__user-message">Lorem ipsum</div>
            </div>
            <div className="bubbles-date-group__user-message-wrapper">
              <div className="bubbles-date-group__user-message another-user">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas totam aspernatur quis earum, suscipit mollitia incidunt facere molestiae ducimus quos iste illo harum corrupti eveniet magnam delectus dicta? Voluptatibus, a.</div>
              <div className="bubbles-date-group__user-message another-user">Lorem</div>
            </div>
            <div className="bubbles-date-group__user-message-wrapper">
              <div className="bubbles-date-group__user-message">Lorem ipsum</div>
            </div>
            <div className="bubbles-date-group__user-message-wrapper">
              <div className="bubbles-date-group__user-message another-user">Lorem</div>
            </div>
          </div>
        </section>
      </div>
      <svg height="0" width="0">
        <defs>
          <clipPath id="svgPath">
            <path fill="#FFFFFF" d="M10,10H0V0H0A10,10,0,0,0,10,10Z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default ChatWindow;
