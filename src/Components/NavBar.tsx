import React from 'react';

class NavBar extends React.Component {

    openMichael(){
        window.open("https://www.linkedin.com/in/michael-brooksengineer/", '_blank')
    }

    render() {
        return (
        <div className="NavBar">
            <div className="NavBarContent">
                <div className="LeftNav">
                    <h1 className="NavName" onClick={this.openMichael}>
                        MICHAEL BROOKS
                    </h1>
                </div>
                <div className="RightNav">
                    <ul>
                        <li>Intro</li>
                        <li>Experience</li>
                        <li>Resume</li>
                        <li>Projects</li>
                    </ul>
                </div>    
            </div>
        </div>
        )
    }
}



export default NavBar;