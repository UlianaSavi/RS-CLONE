import BubblesDate from '../BubblesDate/BubblesDate';
import './BubblesDateGroup.scss';

interface BubblesDateGroupProps {
  date: string,
  messagesArr: React.ReactNode[],
}

export function BubblesDateGroup({ date, messagesArr }: BubblesDateGroupProps) {
  return (
    <section className="bubbles-date-group">
      <BubblesDate date={date} />
      <div className="bubbles-date-group__messages-wrapper">
        <div className="bubbles-date-group__user-messages-wrapper">
          {messagesArr}
        </div>
      </div>
    </section>
  );
}
