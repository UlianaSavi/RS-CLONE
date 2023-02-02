import AddAvatarButton from '../../components/AddAvatarButton/AddAvatarButton';
import './Form.scss';

interface FormProps {
  mode: 'register' | 'login';
}

function Form({ mode }: FormProps) {
  const data = {
    register: {
      title: 'Register',
      button: 'Sign up',
      footerText: 'Do you have an account?',
      footerLink: '/login',
      footerLinkText: 'Login',
    },
    login: {
      title: 'Login',
      button: 'Sign in',
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
        <button type="button" className="form__submit-btn">
          {data[mode].button}
        </button>
      </form>
      <p className="form__footer">
        {data[mode].footerText}
        <a className="form__link" href={data[mode].footerLink}>
          {data[mode].footerLinkText}
        </a>
      </p>
    </div>
  );
}

export default Form;
