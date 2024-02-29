import React from 'react';
import logo from './logo.svg';
import './App.css';
import ConnectionRedirectionHandler from './containers/connection-redirec-handler';

function App() {

  const currentUser = {
    nom: "Nom de l'administrateur", 
    role: 'admin', 
  };

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ConnectionRedirectionHandler currentUser={currentUser} />   
    </div>
  );
}

export default App;