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
                        <li>Levereged web developer knowledge to lead and support clients to thrive while integrating our product.</li>
                        <li>Constructed reliable proof of concepts for clients by writing clean, readable, and maintainable code.</li>
                        <li>Managed customers data regarding our product through Azure by utilizing Azure's blob storage and file shares.</li>
                        <li>Showcased correct usage of our API by creating example HTTP requests. Effectively troubleshooted API issues reported by clients.</li>
                        <li>Assisted in increasing customer satisfaction from less than 80% to 97.5%.</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ChiliSection;