import logo from './logo.svg';
import './App.css';

const Message = () => {
  return (
    <div>
      <p>{"It's time to learn React!!!"}</p>
    </div>
  );
};

// lets create a class component
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name || 'John Doe';
  }

  render() {
    return (
        <p>Welcome, {this.name}</p>
    );
  }
}

Welcome.defaulNameProp = {
  name : 'Burak',
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message />
        <Welcome />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/karhannburak/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
