import React from 'react'

class PythonApi extends React.Component<any, any> {

    render(){
        return(
            <div className="ExperienceSubSection">
                <h1 className="JobTitle">
                    Python API App
                </h1>
                <h1 className="JobRoleTitle">
                    Python, API, Tkinter.
                </h1>
                <h1 className="JobTimePeriod">
                    06/2020-11/2020
                </h1>
                <div className="JobDescription">
                    <ul>
                        <li>Python app was able to make a request to the NASA Astronomy Picture Of the Day API with a date and would display the description of the picture as well as the picture for that day.</li>
                        <li>The app was made simply with Python and tkinter. Tkinter for the GUI side of things and Python for both tkinter and to handle the requests.</li>
                        <li>This Project was able to really get me started into programming and would get me used to reading documentation and working with APIs.</li>
                        <li>Eventually I will do a similar project with node.js and TypeScript with an updated appearance and a more in depth API that can provide more interaction for the user.</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default PythonApi;