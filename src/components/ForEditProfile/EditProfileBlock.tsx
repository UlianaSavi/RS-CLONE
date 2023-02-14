import { ArrowLeftIcon } from '../../assets/icons/icons';
import './EditProfileBlock.scss';

export default function EditProfileBlock() {
  return (
    <div className="edit-profile">
      <div className="header">
        <ArrowLeftIcon />
        <span className="header__text">Edit Profile</span>
      </div>
      <section className="edit-user-info">
        <div className="edit-user-info__img">Photo</div>
        <div className="edit-uer-info__first-name">Masik</div>
        <div className="edit-user-info__last-name">Kolen</div>
        <div className="edit-user-info__bio">Bio</div>
        <div className="edit-user-info__descr">
          Any details such as age, occupation or city.
          Example: 23 y.o. designer from San Francisco
        </div>
      </section>
      <section className="edit-username">
        <span>Username</span>
        <div className="edit-username__username">
          winiceame
        </div>
        <div className="edit-username__descr">
          You can choose a username on Telegram. If you do, people will be able to find you by this username and contact you without needing your phone number.You can use a–z, 0–9 and underscores. Minimum length is 5 characters.This link opens a chat with you:https://t.me/winiceame
        </div>
      </section>
    </div>
  );
}
