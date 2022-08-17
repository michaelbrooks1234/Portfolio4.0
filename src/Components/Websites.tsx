import React from 'react'

class Websites extends React.Component<any, any> {

    render(){
        return(
            <div className="ExperienceSubSection">
                <h1 className="JobTitle">
                    Portfolios.
                </h1>
                <h1 className="JobRoleTitle">
                    HTML, CSS, Django, Python, Javascript/TypeScript, React
                </h1>
                <h1 className="JobTimePeriod">
                   From Dec 13 2021 - Present. 
                </h1>
                <div className="JobDescription">
                    <ul>
                        <li>React Portfolio: Portfolio made with React and TypeScript.</li>
                        <li>Other Portfolios: Made with HTML, CSS, Django, Python. Deployed on a Virtual Private Server hosted on Linode. Domain management also done through linode.</li>
                        <li>I keep refactoring my portfolio to experiment with different technologies and update appearences... I will keep using React until I feel like I have mastered it and will then probably move on to experiement with another.</li>
                        <li>All of my websites where fully deployed at one point or another.</li>
                        <li>Github links to these sites: <a href="https://github.com/michaelbrooks1234/Portfolio4.0" target={"_blank"} rel="noreferrer">React Portfolio</a>, <a href='https://github.com/michaelbrooks1234/Portfolio' target={"_blank"} rel="noreferrer">2nd Most Recent</a>, <a href='https://github.com/michaelbrooks1234/Personal-Website' target={"_blank"} rel="noreferrer">Oldest Website</a></li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Websites;