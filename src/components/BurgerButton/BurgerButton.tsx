import './BurgerButton.scss';

// Пока не знаю, куда лучше выносить логику, поэтому для удобства дальнейшего рефактора это здесь
const openPopap = () => {
  const popap = document.getElementById('popap');
  if (!popap?.classList.contains('active')) {
    popap?.classList.add('active');
  } else {
    popap?.classList.remove('active');
  }
};

function BurgerButton() {
  return (
    <button type="button" className="burger-button" onClick={openPopap}>
      <div className="burger-button__line" />
      <div className="burger-button__line" />
      <div className="burger-button__line" />
    </button>
  );
}

export default BurgerButton;
