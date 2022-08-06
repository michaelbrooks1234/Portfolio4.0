import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import TitleBackground from './Components/TitleBackground'
import SecondaryBar from './Components/SecondaryBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <TitleBackground/>
      <SecondaryBar/>
    </div>
  );
}

export default App;
