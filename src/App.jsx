import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Views
import Home from './features/Home';
import Movements from './features/Movements';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Movements />} exact />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
