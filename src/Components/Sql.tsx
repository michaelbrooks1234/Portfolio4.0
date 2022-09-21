import React from 'react'

class Sql extends React.Component<any, any> {

    render(){
        return(
            <div className="ExperienceSubSection">
                <h1 className="JobTitle">
                     SQL visual editor
                </h1>
                <h1 className="JobRoleTitle">
                    Python, Tkinter, SQLite
                </h1>
                <h1 className="JobTimePeriod">
                    09/2022-Present
                </h1>
                <div className="JobDescription">
                    <ul>
                        <li>Created a GUI app that allowed interaction with an SQLite database.</li>
                        <li>Users can create new databases and manage the tables within them.</li>
                        <li>New tables and rows in tables can be created, as well as editing all specific values (except primary_key)</li>
                        <li>Primary key is automatically created and maintained when adding new rows.</li>
                        <li>Link to project on github: <a href='https://github.com/michaelbrooks1234/SQL-database-visual-editor' target={"_blank"} rel="noreferrer">SQL App</a></li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Sql;