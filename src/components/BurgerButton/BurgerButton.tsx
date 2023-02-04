import './BurgerButton.scss';

// Пока не знаю, куда лучше выносить логику, поэтому для удобства дальнейшего рефактора это здесь
const togglePopup = () => {
  const popup = document.getElementById('popup');
  popup?.classList.toggle('active');
};

function BurgerButton() {
  return (
    <button type="button" className="burger-button" onClick={togglePopup}>
      <div className="burger-button__line" />
      <div className="burger-button__line" />
      <div className="burger-button__line" />
    </button>
  );
}

export default BurgerButton;
