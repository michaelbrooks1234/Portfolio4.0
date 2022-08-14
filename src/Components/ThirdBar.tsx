import React from 'react'

class ThirdBar extends React.Component<any, any> {

    constructor(props: any) {
    super(props);
    this.state = {setSection: props.setSection, passRef: props.passRef}
    
    this.selectSection = this.selectSection.bind(this);
    }

    selectSection(section: string){
            if(section === "CHILI Publish"){
                this.state.setSection();
            }else if (section ==="Sykes"){
                this.state.setSection();
            }else if (section === "VayK Gear"){
                this.state.setSection();
            }else if(section === "Papa John's"){
                this.state.setSection();
            }else {
                this.state.setSection();
            }
        return;
    }

    render(){
       return(
        <div className="ThirdBar" ref={this.state.passRef}>
            <ul>
                <li onClick={() => this.selectSection('React Portfolio')}>React Portfolio</li>
                <li onClick={() => this.selectSection('React Portfolio')}>React Portfolio</li>
                <li onClick={() => this.selectSection('React Portfolio')}>React Portfolio</li>
                <li onClick={() => this.selectSection('React Portfolio')}>React Portfolio</li>
                <li onClick={() => this.selectSection('React Portfolio')}>React Portfolio</li>
            </ul>
        </div>
       ) 
    }
}


export default ThirdBar;