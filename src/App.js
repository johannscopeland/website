import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Johannes Copeland</h1>
        <p>
          I'm a Software Engineer working with and studying Data and AI.
        </p>
      </header>
      <div>
        <h1>Connect with me</h1>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/johannscopeland" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.xing.com/profile/yourxingurl" target="_blank" rel="noopener noreferrer">
              XING
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
