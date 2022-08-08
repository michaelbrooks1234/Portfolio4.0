import React from 'react'
import SykesSection from './SykesSection';
import ChiliSection from './ChiliSection';
import PapaJohnSection from './PapaJohnSection';
import VaykSection from './VaykSection';
import PersonalExperience from './PersonalExperience'


class SecondaryBar extends React.Component<any, any>{

    constructor(props: any) {
    super(props);
    this.state = {setSection: props.setSection, sectionSelected: <ChiliSection/>}
    
    this.selectSection = this.selectSection.bind(this);
    }



    selectSection(section: string){
            if(section === "CHILI Publish"){
                this.state.setSection(<ChiliSection/>);
            }else if (section ==="Sykes"){
                this.state.setSection(<SykesSection/>);
            }else if (section === "VayK Gear"){
                this.state.setSection(<VaykSection/>);
            }else if(section === "Papa John's"){
                this.state.setSection(<PapaJohnSection/>);
            }else {
                this.state.setSection(<PersonalExperience/>);
            }
        return;
    }

    render() {
        return (
            <div className="SecondaryBar">
                <div className="SecondBarContent">
                    <ul>
                        <li onClick={() => this.selectSection('CHILI Publish')}>CHILI Publish</li>
                        <li onClick={() => this.selectSection('Sykes')}>Sykes</li>
                        <li onClick={() => this.selectSection("VayK Gear")}>VayK Gear</li>
                        <li onClick={() => this.selectSection("Papa John's")}>Papa John's</li>
                        <li onClick={() => this.selectSection("personal Experience")}>Personal Experience</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SecondaryBar;

