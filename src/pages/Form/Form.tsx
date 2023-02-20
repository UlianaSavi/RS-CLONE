import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  collection, DocumentData, getDocs, query,
} from 'firebase/firestore';
import { singIn, singUp } from '../../API/api';
import telegramLogo from '../../assets/img/telegramLogo.svg';
import FormInput from '../../components/FormInput/FormInput';
import AddAvatarButton from '../../components/AddAvatarButton/AddAvatarButton';
import './Form.scss';
import { db } from '../../firebaseConfig';

interface FormProps {
  mode: 'login-email' | 'register-email';
}

function Form({ mode }: FormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState({ file: null });
  const [errorMessage, setErrorMessage] = useState('');

  const getAllUsers = async () => {
    const q = query(collection(db, 'users'));
    const querySnapshot = await getDocs(q);
    const userDataArray: DocumentData[] = [];
    querySnapshot.forEach((d) => userDataArray.push({ userInfo: d.data() }));
    return userDataArray;
  };

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
      setValue={setEmail}
      required
    />
    <FormInput type="password" id="password" label="Password" value="" setValue={setPassword} required />
  </>,
    },
    'register-email': {
      title: 'Please enter your username, email and password.',
      changeModeButtonText: 'SIGN IN',
      altLoginRoute: '/register-phone',
      registrationRoute: '/login',
      inputs:
  <>
    <FormInput type="text" id="name" label="Username" value="" setValue={setName} required />
    <FormInput type="email" id="email" label="Email" value="" setValue={setEmail} pattern="^[A-Za-z0-9]*[@][A-Za-z0-9]*[.][A-Za-z]*" title="Please enter the correct email address. For example: duck@gmail.com" required />
    <FormInput type="password" id="password" label="Password" value="" setValue={setPassword} pattern=".{6,}" title="At least 6 characters are required" required />
  </>,
    },
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (mode === 'register-email') {
      const checkForMatchName = await getAllUsers().then((result) => result
        .some((item) => item.userInfo.displayName === name));
      const checkForMatchEmail = await getAllUsers().then((result) => result
        .some((item) => item.userInfo.email === email));
      if (checkForMatchName) {
        setErrorMessage('This username already exist');
      } else if (checkForMatchEmail) {
        setErrorMessage('This e-mail already exist');
      } else {
        setErrorMessage('');
        singUp(name, email, password, avatar.file);
      }
    }
    if (mode === 'login-email') {
      const checkForMatchEmail = await getAllUsers().then((result) => result
        .some((item) => item.userInfo.email === email));
      if (checkForMatchEmail) {
        setErrorMessage('');
        singIn(email, password);
      } else {
        setErrorMessage('There is no such e-mail');
      }
    }
  };

  return (
    <div className="form__background">
      <div className="form">
        <img className="form__logo" src={telegramLogo} alt="SVG logo" />
        <h1 className="form__title">Telegram</h1>
        <h2 className="form__subtitle">{data[mode].title}</h2>
        {errorMessage ? <span className="form__error-message">{errorMessage}</span> : ''}
        <form className="form__inputs" onSubmit={handleSubmit}>
          {data[mode].inputs}
          {mode === 'register-email' && <AddAvatarButton setValue={setAvatar} />}
          <button
            type="submit"
            className="form__button"
          >
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
