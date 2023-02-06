import './ChatWindow.scss';
import { ReactComponent as CheckMark } from '../../assets/icons/check-solid.svg';
// import ThemeImage from '../../assets/chat-bg/bg-house-theme.png';
import MessageInput from '../MessageInput/MessageInput';

function ChatWindow() {
  return (
    <div className="chat-window">
      <div className="chat-window__wrapper">
        <section className="bubbles-date-group">
          <div className="bubbles-date-group__date">Today</div>
          <div className="bubbles-date-group__messages-wrapper">
            <div className="bubbles-date-group__user-messages-wrapper">
              <div className="bubbles-date-group__user-message">
                <span className="bubbles-date-group__message">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At animi dignissimos inventore corporis, cupiditate cum delectus odit. Optio inventore minima hic facilis nobis molestias recusandae, laboriosam consequatur quo, cum ipsum?  </span>
                <div className="bubbles-date-group__time-n-check-wrapper">
                  <span className="bubbles-date-group__time">
                    00:23
                  </span>
                  <CheckMark className="bubbles-date-group__check-mark" />
                  <CheckMark className="bubbles-date-group__check-mark second-check" />
                </div>
              </div>
              <div className="bubbles-date-group__user-message">
                <span className="bubbles-date-group__message">
                  Lorem
                </span>
                <div className="bubbles-date-group__time-n-check-wrapper">
                  <span className="bubbles-date-group__time">
                    00:23
                  </span>
                  <CheckMark className="bubbles-date-group__check-mark" />
                  <CheckMark className="bubbles-date-group__check-mark second-check" />
                </div>
              </div>
            </div>
            <div className="bubbles-date-group__user-messages-wrapper">
              <div className="bubbles-date-group__user-message another-user">
                <span className="bubbles-date-group__message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, distin
                </span>
                <span className="bubbles-date-group__time">
                  00:23
                </span>
              </div>
              <div className="bubbles-date-group__user-message another-user">
                <span className="bubbles-date-group__message">
                  Lorem
                </span>
                <span className="bubbles-date-group__time">
                  00:23
                </span>
              </div>
            </div>
            <div className="bubbles-date-group__user-messages-wrapper">
              <div className="bubbles-date-group__user-message">
                <span className="bubbles-date-group__message">
                  Lorem ipsum
                </span>
                <div className="bubbles-date-group__time-n-check-wrapper">
                  <span className="bubbles-date-group__time">
                    00:23
                  </span>
                  <CheckMark className="bubbles-date-group__check-mark" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <MessageInput />
      <svg height="0" width="0">
        <defs>
          <clipPath id="svgPath">
            <path fill="#FFFFFF" d="M10,10H0V0H0A10,10,0,0,0,10,10Z" />
          </clipPath>
        </defs>
      </svg>
      {/* <img src={ThemeImage} alt=" " className="chat-window__bg-image" /> */}
      <div className="chat-window__bg-image" />
    </div>
  );
}

export default ChatWindow;
