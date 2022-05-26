import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './views/ProductPage';

import './App.css';
function App() {
  return (
    <div className="App">
      <React.Fragment>
          <Routes>
          <Route exact path="/" element={<Home />} />
          </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
