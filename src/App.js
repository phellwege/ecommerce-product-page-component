import React from 'react';
import { Router } from '@reach/router';
import Home from './views/ProductPage';

import './App.css';
function App() {
  return (
    <div className="App">
      <React.Fragment>
          <Router>
            <Home path="/"/>
          </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
