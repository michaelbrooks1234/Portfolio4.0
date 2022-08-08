import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import TitleBackground from './Components/TitleBackground'
import SecondaryBar from './Components/SecondaryBar'
import ExperienceSection from './Components/ExperienceSection'
import ChiliSection from './Components/ChiliSection'
import Headshot from './HeadshotRatio.png'
import arrow from './arrow.png'


class App extends React.Component<any, any>{

  constructor(props: any) {
    super(props);
    this.state = {selectedSection: <ChiliSection/>, scrollToSection: "Experience"}

    this.setSelected = this.setSelected.bind(this);
  }

  setSelected(section: any){
    this.setState({ 
      selectedSection: section 
    })
  }

  render(){
    return (
      <div className="App">
        <NavBar/>
        <TitleBackground headShot={Headshot} arrow={arrow}/>
        <SecondaryBar setSection={this.setSelected}/>
        <ExperienceSection selected={this.state.selectedSection}/>
      </div>
    )
  }
}

export default App;
