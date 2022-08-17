import React from 'react'

class GuiApp extends React.Component<any, any> {
    
    render(){
        return(
            <div className="ExperienceSubSection">
                <h1 className="JobTitle">
                    C++ Gui App
                </h1>
                <h1 className="JobRoleTitle">
                    C++, QT
                </h1>
                <h1 className="JobTimePeriod">
                    02/2021 - 05/2021
                </h1>
                <div className="JobDescription">
                    <ul>
                        <li>Gui</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default GuiApp;