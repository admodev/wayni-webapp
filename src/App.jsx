import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Views
import Home from './features/Home';
import Movements from './features/Movements';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/movements" element={<Movements />} />
    </Routes>
  </Router>
);

export default App;
