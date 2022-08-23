import React from 'react';

class ChiliSection extends React.Component {
    render(){
        return (
            <div className="ExperienceSubSection">
                <h1 className="JobTitle">
                    Chili Publish
                </h1>
                <h1 className="JobRoleTitle">
                    Client Success Engineer
                </h1>
                <h1 className="JobTimePeriod">
                   From Dec 13 2021 - Present. 
                </h1>
                <div className="JobDescription">
                    <ul>
                        <li>Leveraged Node.js and the vast variety of libraries in npm to create high functionality scripts that could be re-used efficiently.</li>
                        <li>Fully developed web app integrations of the product with React and TypeScript packaged into an electron app for easy distribution.</li>
                        <li>Managed customers data regarding our product through Azure by utilizing Azure's blob storage and file shares..</li>
                        <li>showcased correct usage of our API by creating example REST calls utilizing node.js and fetch.</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ChiliSection;