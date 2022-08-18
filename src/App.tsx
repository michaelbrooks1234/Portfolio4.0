import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import TitleBackground from './Components/TitleBackground'
import SecondaryBar from './Components/SecondaryBar'
import ExperienceSection from './Components/ExperienceSection'
import ChiliSection from './Components/ChiliSection'
import Headshot from './HeadshotRatio.png'
import arrow from './arrow.png'
import ThirdBar from './Components/ThirdBar'
import ProjectsSection from './Components/ProjectsSection';
import Websites from './Components/Websites';
import ResumeSection from './Components/ResumeSection';

class App extends React.Component<any, any>{
  private secondaryBarScroll: any;
  private thirdBarScroll: any;
  private resumeSection: any;

  constructor(props: any) {
    super(props);
    this.state = {selectedSection: <ChiliSection/>, selectedSection2: <Websites/>}

    this.thirdBarScroll = React.createRef();
    this.secondaryBarScroll = React.createRef();
    this.resumeSection = React.createRef();
    this.scrollToComp = this.scrollToComp.bind(this);
    this.setSelected = this.setSelected.bind(this);
    this.setSelected2 = this.setSelected2.bind(this); 
  }
  
  scrollToComp(comp: string){
    if(comp === "SecondaryBar"){
      const ref = this.secondaryBarScroll.current;
      const y: any = ref.offsetTop - 70;
      window.scrollTo(0, y);
    }else if(comp === "ThirdBar"){
      const ref = this.thirdBarScroll.current;
      const y: any = ref.offsetTop - 70;
      window.scrollTo(0,y);
    }else if(comp === "Resume"){
      const ref = this.resumeSection.current;
      const y: any = ref.offsetTop - 70;
      window.scrollTo(0,y);
    }
  }

  setSelected(section: any){
    this.setState({ 
      selectedSection: section 
    })
  }

  setSelected2(section: any){
    this.setState({
      selectedSection2: section
    })
  }


  render(){
    return (
      <div className="App">
        <NavBar scrollFunction={this.scrollToComp}/>
        <TitleBackground headShot={Headshot} arrow={arrow} scrollFunction={this.scrollToComp}/>
        <SecondaryBar setSection={this.setSelected} passRef={this.secondaryBarScroll}/>
        <ExperienceSection selected={this.state.selectedSection} arrow={arrow} scrollFunction={this.scrollToComp}/>
        <ThirdBar setSelection={this.setSelected2} passRef={this.thirdBarScroll}/>
        <ProjectsSection selected={this.state.selectedSection2} arrow={arrow} scrollExp={this.scrollToComp}/>
        <ResumeSection passRef={this.resumeSection}/>
      </div>
    )
  }
}

export default App;
