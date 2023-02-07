import BubblesDate from '../BubblesDate/BubblesDate';
import BubblesMessage from '../BubblesMessage/BubblesMessage';
import './BubblesDateGroup.scss';

export default function BubblesDateGroup(props: {date: string}) {
  const { date } = props;
  return (
    <section className="bubbles-date-group">
      <BubblesDate date={date} />
      <div className="bubbles-date-group__messages-wrapper">
        <div className="bubbles-date-group__user-messages-wrapper">
          <BubblesMessage
            message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            time="11:00"
            isRead
            isCurrenUser
          />
          <BubblesMessage
            message="Lorem"
            time="15:00"
            isRead
            isCurrenUser
          />
        </div>
        <div className="bubbles-date-group__user-messages-wrapper">
          <BubblesMessage
            message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            time="16:00"
            isRead
            isCurrenUser={false}
          />
          <BubblesMessage
            message="Lorem"
            time="16:05"
            isRead
            isCurrenUser={false}
          />
        </div>
        <div className="bubbles-date-group__user-messages-wrapper">
          <BubblesMessage
            message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            time="20:00"
            isRead={false}
            isCurrenUser
          />
        </div>
      </div>
    </section>
  );
}
