import React from 'react';
import { Link } from 'react-router-dom';

// Stylesheet
import './styles.css';

const Home = () => (
  <div className="container">
    <Link className="title" to="/movements">
      Movimientos
    </Link>
  </div>
);

export default Home;
