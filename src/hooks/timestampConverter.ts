import * as firestore from 'firebase/firestore';

export const convertTimestamp = (timestamp: firestore.Timestamp): string => {
  const currentDate = timestamp.toDate();
  const now = new Date();

  if (currentDate.getFullYear() === now.getFullYear()
    && currentDate.getMonth() === now.getMonth()
    && currentDate.getDate() === now.getDate()) {
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  const month = currentDate.toLocaleString('default', { month: 'short' });
  const day = currentDate.getDate();
  return `${month} ${day}`;
};
