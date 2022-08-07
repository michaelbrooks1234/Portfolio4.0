import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import TitleBackground from './Components/TitleBackground'
import SecondaryBar from './Components/SecondaryBar'
import ExperienceSection from './Components/ExperienceSection'
import ChiliSection from './Components/ChiliSection'


function App() {
  
  const [selectedSection, setSelected] = React.useState(<ChiliSection/>);

  return (
    <div className="App">
      <NavBar/>
      <TitleBackground/>
      <SecondaryBar setSection={setSelected}/>
      <ExperienceSection selected={selectedSection}/>
    </div>
  );
}

export default App;
