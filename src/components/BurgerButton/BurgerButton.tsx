import './BurgerButton.scss';

function BurgerButton() {
  return (
    <button type="button" className="burger-button">
      <div className="burger-button__line" />
      <div className="burger-button__line" />
      <div className="burger-button__line" />
    </button>
  );
}

export default BurgerButton;
