import { Link } from 'react-router-dom';
import AddAvatarButton from '../../components/AddAvatarButton/AddAvatarButton';
import './Form.scss';

interface FormProps {
  mode: 'register' | 'login';
}

function Form({ mode }: FormProps) {
  const data = {
    register: {
      title: 'Register',
      buttonText: 'Sign up',
      footerText: 'Do you have an account?',
      footerLink: '/login',
      footerLinkText: 'Login',
    },
    login: {
      title: 'Login',
      buttonText: 'Sign in',
      footerText: 'Don\'t you have an accoint?',
      footerLink: '/',
      footerLinkText: 'Register',
    },
  };

  return (
    <div className="form">
      <h1 className="form__logo">Super Chat</h1>
      <h2 className="form__title">{data[mode].title}</h2>
      <form className="form__inputs">
        {mode === 'register' ? <input className="form__input" type="text" placeholder="Name" /> : null}
        <input className="form__input" type="email" placeholder="Email" />
        <input className="form__input" type="password" placeholder="Password" />
        {mode === 'register' ? <AddAvatarButton /> : null}
        <Link className="form__submit-btn" to="/messenger">
          {data[mode].buttonText}
        </Link>
      </form>
      <p className="form__footer">
        {data[mode].footerText}
        <Link className="form__link" to={data[mode].footerLink}>
          {data[mode].footerLinkText}
        </Link>
      </p>
    </div>
  );
}

export default Form;
