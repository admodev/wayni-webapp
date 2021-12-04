import React from 'react';

// Assets
import HomeIcon from './assets/Icono/home.png';
import MovementsIcon from './assets/Icono/movements.png';
import CardIcon from './assets/Icono/card.png';
import BillIcon from './assets/Icono/bill.png';
import HamburguerIcon from './assets/Icono/hamburger_menu.png';

// Stylesheet
import './styles.css';

const TabBar = () => (
  <div className="tab-container">
    <div className="tab-one">
      <img src={HomeIcon} alt="home" />
    </div>
    <div className="tab-two">
      <img src={MovementsIcon} alt="movements" />
    </div>
    <div className="tab-three">
      <img src={CardIcon} alt="card" />
    </div>
    <div className="tab-four">
      <img src={BillIcon} alt="bill" />
    </div>
    <div className="tab-five">
      <img src={HamburguerIcon} alt="hamburguer" />
    </div>
  </div>
);

export default TabBar;
