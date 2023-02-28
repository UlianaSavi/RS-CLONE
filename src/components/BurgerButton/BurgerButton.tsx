import './BurgerButton.scss';

function BurgerButton(props: {callback: () => void }) {
  const { callback } = props;
  return (
    <button type="button" className="burger-button" onClick={() => callback()}>
      <div className="burger-button__line" />
      <div className="burger-button__line" />
      <div className="burger-button__line" />
    </button>
  );
}

export default BurgerButton;
