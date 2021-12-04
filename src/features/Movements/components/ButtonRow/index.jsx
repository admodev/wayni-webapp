import React from 'react';

// Assets
import CargarDinero from './assets/Icono/cargar_dinero.png';
import ExtraerDinero from './assets/Icono/extraer_dinero.png';
import Transferencia from './assets/Icono/transferencia.png';

// Stylesheet
import './styles.css';

const ButtonRow = () => (
  <div className="button-row-container">
    <div className="first-button">
      <img src={CargarDinero} alt="cargar dinero" />
      <h4 className="button-row-text">Cargar dinero</h4>
    </div>
    <div className="second-button">
      <img src={ExtraerDinero} alt="extraer dinero" />
      <h4 className="button-row-text">Extraer dinero</h4>
    </div>
    <div className="third-button">
      <img src={Transferencia} alt="transferencia" />
      <h4 className="button-row-text">Transferir dinero</h4>
    </div>
  </div>
);

export default ButtonRow;
