import './BurgerButton.scss';

// Пока не знаю, куда лучше выносить логику, поэтому для удобства дальнейшего рефактора это здесь
const togglePopap = () => {
  const popap = document.getElementById('popap');
  popap?.classList.toggle('active');
};

function BurgerButton() {
  return (
    <button type="button" className="burger-button" onClick={togglePopap}>
      <div className="burger-button__line" />
      <div className="burger-button__line" />
      <div className="burger-button__line" />
    </button>
  );
}

export default BurgerButton;
