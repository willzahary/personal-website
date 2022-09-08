import React from 'react';
import { Main } from './components/Main';
import './scss/App.scss';
import {library} from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter as Router } from 'react-router-dom';

// Icons

import {
	faGithub,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
	faEnvelope,
	faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faGithub,
	faLinkedin,
	faTwitter,
  faEnvelope,
	faFileAlt,
)

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
