import { ReactComponent as CheckMark } from '../../assets/icons/check-solid.svg';
import BubblesDate from '../BubblesDate/BubblesDate';
import './BubblesDateGroup.scss';

export default function BubblesDateGroup() {
  return (
    <section className="bubbles-date-group">
      <BubblesDate date="Today" />
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
  );
}
