import BubblesDate from '../BubblesDate/BubblesDate';
import './BubblesDateGroup.scss';

interface BubblesDateGroupProps {
  date: string,
  messagesArr: React.ReactNode[],
}

export function BubblesDateGroup({ date, messagesArr }: BubblesDateGroupProps) {
  const today = new Date().toString().split(' ').splice(1, 2)
    .join(' ');
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = yesterdayDate.toString().split(' ').splice(1, 2)
    .join(' ');

  let dateForView = date;
  if (date === today) {
    dateForView = 'Today';
  } else if (date === yesterday) {
    dateForView = 'Yesterday';
  } else {
    dateForView = `${new Date(date).toLocaleString('en', { month: 'long' })} ${date.split(' ')[1]}`;
  }

  return (
    <section className="bubbles-date-group">
      <BubblesDate date={dateForView} />
      <div className="bubbles-date-group__messages-wrapper">
        <div className="bubbles-date-group__user-messages-wrapper">
          {messagesArr}
        </div>
      </div>
    </section>
  );
}
