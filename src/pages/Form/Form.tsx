import { Link } from 'react-router-dom';
import telegramLogo from '../../assets/img/telegramLogo.svg';
import FormInput from '../../components/FormInput/FormInput';
import './Form.scss';

interface FormProps {
  mode: 'login-email' | 'login-phone';
}

function Form({ mode }: FormProps) {
  const data = {
    'login-phone': {
      title: 'Please confirm your country code and enter your phone number.',
      buttonText: 'NEXT',
    },
    'login-email': {
      title: 'Login',
      buttonText: 'Sign in',
    },
  };

  return (
    <div className="form__background">
      <div className="form">
        <img className="form__logo" src={telegramLogo} alt="SVG logo" />
        <h1 className="form__title">Telegram</h1>
        <h2 className="form__subtitle">{data[mode].title}</h2>
        <form className="form__inputs">
          {/* {mode === 'register' ? <input
          className="form__input" type="text" placeholder="Name" /> : null} */}
          {/* <input className="form__input" type="email" placeholder="Email" />
          <input className="form__input" type="password" placeholder="Password" /> */}
          <FormInput type="text" id="country" label="Country" value="Russia" />
          <FormInput type="text" id="phoneNumber" label="Your phone number" value="+7" />
          <Link className="form__button" to="/messenger">
            {data[mode].buttonText}
          </Link>
          <Link className="form__button form__button_outline" to="/messenger">
            LOG IN BY EMAIL
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Form;
