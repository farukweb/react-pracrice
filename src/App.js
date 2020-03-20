import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var person ={
    name: "Faruk Ahmad",
    occupation: "Student"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Person Name : {person.name} Person Occupation : {person.name}
          </h3>
        
      </header>
    </div>
  );
}

export default App;
