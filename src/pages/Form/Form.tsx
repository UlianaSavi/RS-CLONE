import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sentCode } from '../../API/api';
import telegramLogo from '../../assets/img/telegramLogo.svg';
import FormInput from '../../components/FormInput/FormInput';
import './Form.scss';

interface FormProps {
  mode: 'login-email' | 'register-email';
}

function Form({ mode }: FormProps) {
  const [email, setEmail] = useState('');
  const data = {
    'login-email': {
      title: 'Please enter your email and password.',
      changeModeButtonText: 'SIGN UP',
      altLoginRoute: '/',
      registrationRoute: '/register',
      inputs:
  <>
    <FormInput
      type="email"
      id="email"
      label="Email"
      value=""
    />
    <FormInput type="password" id="password" label="Password" value="" />
  </>,
    },
    'register-email': {
      title: 'Please enter your name, email and password.',
      changeModeButtonText: 'SIGN IN',
      altLoginRoute: '/register-phone',
      registrationRoute: '/login',
      inputs:
  <>
    <FormInput type="text" id="name" label="Name" value="" />
    <FormInput type="email" id="email" label="Email" value="" setValue={setEmail} />
    <FormInput type="password" id="password" label="Password" value="" />
  </>,
    },
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(email);
    sentCode(email);
  };

  return (
    <div className="form__background">
      <div className="form">
        <img className="form__logo" src={telegramLogo} alt="SVG logo" />
        <h1 className="form__title">Telegram</h1>
        <h2 className="form__subtitle">{data[mode].title}</h2>
        <form className="form__inputs" onSubmit={handleSubmit}>
          {data[mode].inputs}
          <button type="submit" className="form__button">
            NEXT
          </button>
          <Link className="form__button form__button_outline" to={data[mode].registrationRoute}>
            {data[mode].changeModeButtonText}
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Form;
