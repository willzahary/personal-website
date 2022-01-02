import { Landing } from './pages/Landing';
import './scss/App.scss';
import {library} from "@fortawesome/fontawesome-svg-core";


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
        <Landing />
      </header>
    </div>
  );
}

export default App;
