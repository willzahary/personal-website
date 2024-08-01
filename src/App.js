import React from 'react';
import { Main } from './components/Main';
import './scss/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Main />
        </Router>
      </header>
    </div>
  );
}

export default App;
