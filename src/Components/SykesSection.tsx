import React from 'react';

class SykesSection extends React.Component {
    render(){
       return (
            <div className="ExperienceSubSection">
                <h1 className="JobTitle">
                    Sykes
                </h1>
                <h1 className="JobRoleTitle">
                    Technical Support Engineer.
                </h1>
                <h1 className="JobTimePeriod">
                   From Dec 13 2021 - Present. 
                </h1>
                <div className="JobDescription">
                    <ul>
                        <li>Excelled at providing excellent technical support.</li>
                        <li>Troubleshooted clients issues accurately and efficiently.</li>
                        <li>Created bug tickets for issues that required changing source code to fix.</li>
                        <li>Document customer interactions and escalate issues that do not have a known resolution</li>
                    </ul>
                </div>
            </div>
       ) 
    }
}

export default SykesSection;