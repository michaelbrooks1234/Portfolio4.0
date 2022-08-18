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
                        <li>This is a small GUI app made with C++ and QT. It functions as a simple calculator that can do what you expect a calculator to do.</li>
                        <li>This app gave me some useful experience in making GUI applications using a sophisticated framework like QT that is more in depth than something like tkinter for Python.</li>
                        <li>Here is a link to the project: <a href='https://github.com/michaelbrooks1234/Calculator_app' target={"_blank"} rel="noreferrer">C++ app</a></li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default GuiApp;