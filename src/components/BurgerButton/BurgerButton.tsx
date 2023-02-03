import React from 'react';
import './BurgerButton.scss';

const openPopap = () => {
  const popap = document.getElementById('popap');
  console.log(popap);
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
