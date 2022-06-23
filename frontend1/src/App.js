import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Join the Web3 Chinese Diaspora.
        </h1>
        <h1>
          Claim your <a style={{color: 'yellow', textDecoration: 'none'}} href="reactjs.org" target="_blank">Membership NFT</a>
        </h1>
        <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
          </div>
          <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
        </form>
        <h6>
          You will recieve an email when we launch. 
        </h6>
      </header>
    </div>
  );
}

export default App;
