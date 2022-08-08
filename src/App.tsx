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
  private secondaryBarScroll: any;
  constructor(props: any) {
    super(props);
    this.state = {selectedSection: <ChiliSection/>}

    this.secondaryBarScroll = React.createRef();
    this.scrollToComp = this.scrollToComp.bind(this);
    this.setSelected = this.setSelected.bind(this);
  }
  
  scrollToComp(comp: string){
    if(comp === "SecondaryBar"){
      const ref = this.secondaryBarScroll.current;
      console.log(ref);
      const y: any = ref.offsetTop - 70;
      console.log(y);
      window.scrollTo(0, y);
    }
  }

  setSelected(section: any){
    this.setState({ 
      selectedSection: section 
    })
  }


  render(){
    return (
      <div className="App">
        <NavBar scrollFunction={this.scrollToComp}/>
        <TitleBackground headShot={Headshot} arrow={arrow} scrollFunction={this.scrollToComp}/>
        <SecondaryBar setSection={this.setSelected} passRef={this.secondaryBarScroll}/>
        <ExperienceSection selected={this.state.selectedSection}/>
      </div>
    )
  }
}

export default App;
