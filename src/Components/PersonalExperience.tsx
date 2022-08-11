import React from 'react';

class PersonalExperience extends React.Component {
    render(){
       return( 
            <div className="ExperienceSubSection">
                <h1 className="JobTitle">
                    Personal Experience Summary
                </h1>
                <h1 className="JobRoleTitle">
                    Highlighting all my experiences <span className="FinePrint">(will go into more detail in project summary section)</span>
                </h1>
                <h1 className="JobTimePeriod">
                   From August 13 2019 - Present. 
                </h1>
                <div className="JobDescription">
                    <ul className="ListThing">
                        <li>Created and deployed multiple web apps with backend functionality and routing using technologies like JavaScript, TypeScript, Python, Django, Linux, CSS, HTML, and Virtual Machine Servers.</li>
                        <li>Became familiar with data structures and algorithm problem solving through sites like Hackerrank and CodeForces. I utilized C++ for this purpose, learning memory management along the way.</li>
                        <li>Completely understand APIs and how back end structures like APIs are made. Mostly through work and built apun by projects that focus on interaction with an API.</li>
                        <li>Learned best practices for programming like compartmentalization for the sake of code that is easier to read, edit, and maintain.</li>
                        <li>Constantly learning new languages, frameworks, and libraries to increase flexibility and knowledge.</li>
                    </ul>
                </div>
            </div> 
       ) 
    }
}

export default PersonalExperience;