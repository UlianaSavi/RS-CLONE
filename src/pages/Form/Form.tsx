import { Link } from 'react-router-dom';
import telegramLogo from '../../assets/img/telegramLogo.svg';
import FormInput from '../../components/FormInput/FormInput';
import './Form.scss';

interface FormProps {
  mode: 'login-email' | 'login-phone' | 'register-phone' | 'register-email' | 'access-code';
}

function Form({ mode }: FormProps) {
  const data = {
    'login-phone': {
      title: 'Please confirm your country code and enter your phone number.',
      changeProviderButtonText: 'LOG IN BY EMAIL',
      changeModeButtonText: 'SIGN UP',
      altLoginRoute: '/login-email',
      registrationRoute: '/register-phone',
      inputs:
  <>
    <FormInput type="text" id="country" label="Country" value="" />
    <FormInput type="text" id="phoneNumber" label="Your phone number" value="" />
  </>,
    },
    'login-email': {
      title: 'Please enter your email and password.',
      changeProviderButtonText: 'LOG IN BY PHONE NUMBER',
      changeModeButtonText: 'SIGN UP',
      altLoginRoute: '/',
      registrationRoute: '/register-email',
      inputs:
  <>
    <FormInput type="email" id="email" label="Email" value="" />
    <FormInput type="password" id="password" label="Password" value="" />
  </>,
    },
    'register-phone': {
      title: 'Please confirm your country code and enter your phone number.',
      changeProviderButtonText: 'REGISTER BY EMAIL',
      changeModeButtonText: 'SIGN IN',
      altLoginRoute: '/register-email',
      registrationRoute: '/',
      inputs:
  <>
    <FormInput type="text" id="country" label="Country" value="" />
    <FormInput type="text" id="phoneNumber" label="Your phone number" value="" />
  </>,
    },
    'register-email': {
      title: 'Please enter your name, email and password.',
      changeProviderButtonText: 'REGISTER BY PHONE NUMBER',
      changeModeButtonText: 'SIGN IN',
      altLoginRoute: '/register-phone',
      registrationRoute: '/login-email',
      inputs:
  <>
    <FormInput type="text" id="name" label="Name" value="" />
    <FormInput type="email" id="email" label="Email" value="" />
    <FormInput type="password" id="password" label="Password" value="" />
  </>,
    },
    'access-code': {
      title: 'We send you a messege with the code',
      changeProviderButtonText: 'GO BACK',
      changeModeButtonText: 'ENTER',
      altLoginRoute: '/access-code',
      registrationRoute: '/access-code',
      inputs:
  <FormInput type="text" id="code" label="Code" value="" />,
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
          <button type="submit" className="form__button">
            NEXT
          </button>
          <Link className="form__button form__button_outline" to={data[mode].altLoginRoute}>
            {data[mode].changeProviderButtonText}
          </Link>
          <Link className="form__button form__button_outline" to={data[mode].registrationRoute}>
            {data[mode].changeModeButtonText}
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Form;
