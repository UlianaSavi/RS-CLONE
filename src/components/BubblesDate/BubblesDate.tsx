import './BubblesDate.scss';

export default function BubblesDate(props: {date: string}) {
  const { date } = props;
  return (
    <div className="bubbles-date">{date}</div>
  );
}
