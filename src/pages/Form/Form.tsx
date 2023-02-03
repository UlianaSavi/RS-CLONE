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
      buttonText: 'LOG IN BY EMAIL',
      inputs:
  <>
    <FormInput type="text" id="country" label="Country" value="Russia" />
    <FormInput type="text" id="phoneNumber" label="Your phone number" value="+7" />
  </>,
    },
    'login-email': {
      title: 'Please enter your email and password.',
      buttonText: 'LOG IN BY PHONE NUMBER',
      inputs:
  <>
    <FormInput type="email" id="email" label="Email" value="" />
    <FormInput type="password" id="password" label="Password" value="" />
  </>,
    },
  };

  return (
    <div className="form__background">
      <div className="form">
        <img className="form__logo" src={telegramLogo} alt="SVG logo" />
        <h1 className="form__title">Telegram</h1>
        <h2 className="form__subtitle">{data[mode].title}</h2>
        <form className="form__inputs">
          {data[mode].inputs}
          <Link className="form__button" to="/messenger">
            NEXT
          </Link>
          <Link className="form__button form__button_outline" to="/login">
            {data[mode].buttonText}
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Form;
