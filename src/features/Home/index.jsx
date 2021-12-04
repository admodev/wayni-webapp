import React from 'react';
import { Link } from 'react-router-dom';

// Stylesheet
import './styles.css';

const Home = () => (
  <div className="container">
    <div className="icon-home">
      <div className="home-body" />
      <div className="home-roof-cut-left" />
      <div className="home-roof-cut-right" />
      <div className="home-door" />
      <div className="home-chimney" />
      <div className="home-roof-container">
        <div className="home-roof-left" />
        <div className="home-roof-right" />
      </div>
    </div>
    <Link className="title" to="/movements">
      Movimientos
    </Link>
  </div>
);

export default Home;
