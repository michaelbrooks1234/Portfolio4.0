import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
        <div className="NavBar">
            <div className="NavBarContent">
                <div className="LeftNav">
                    <h1 className="NavName">
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