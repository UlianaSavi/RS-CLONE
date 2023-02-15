/* eslint-disable array-callback-return */
import { useEffect, useContext, useState } from 'react';
import { doc, onSnapshot } from '@firebase/firestore';
import { db } from '../../firebaseConfig';
import BubblesDate from '../BubblesDate/BubblesDate';
import BubblesMessage from '../BubblesMessage/BubblesMessage';
import './BubblesDateGroup.scss';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { Message, User } from '../../types';
import { AuthContext } from '../../context/AuthContext';

export function BubblesDateGroup(props: {date: string}) {
  const { activeChatID } = useContext(ActiveChatContext);
  const currentUser: User = useContext(AuthContext) as User;
  const [chatsArr, setMessageArr] = useState([]);
  const { date } = props;
  const getData = async () => {
    if (activeChatID) {
      onSnapshot(doc(db, 'chats', activeChatID), (d) => {
        const data = d.data();
        if (!data) {
          console.log('Hey! There are no messages here.');
          return;
        }

        setMessageArr(data.messages
          .map((message: Message) => (
            <BubblesMessage
              message={message.text}
              time={`${(new Date(message.date.seconds * 1000)).getHours().toString().padStart(2, '0')}:${new Date(message.date.seconds * 1000).getMinutes().toString().padStart(2, '0')}`}
              isRead
              isCurrenUser={message.senderID === currentUser.uid}
              key={message.id}
            />
          )));
      });
    }
  };

  useEffect(() => {
    getData();
  }, [activeChatID]);

  return (
    <section className="bubbles-date-group">
      <BubblesDate date={date} />
      <div className="bubbles-date-group__messages-wrapper">
        <div className="bubbles-date-group__user-messages-wrapper">
          {chatsArr}
        </div>
      </div>
    </section>
  );
}
