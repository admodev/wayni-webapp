import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Detail from './components/Detail';

// Stylesheet
import './styles.css';

const Movements = () => (
  <div className="container">
    <h2 className="mi-cuenta">Mi Cuenta</h2>
    <Detail detailNumber="$1.322,78" cvu="CVU: 0000654326538129540653" />
    <Link className="title" to="/">
      Home
    </Link>
  </div>
);

export default Movements;
