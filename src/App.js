import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://cashapp-transaction-tracker.herokuapp.com/src/index.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cashapp Transaction Tracker
        </a>
      </header>
    </div>
  );
}

export default App;
