import React from 'react';

class ExperienceSection extends React.Component {

    props: any;
    render(){
        return (
            <div className='ExperienceSectionContainer'>
                <div className='ExperienceSubContainer'>
                {this.props.selected}
                </div>
            </div>
        )
    }
}

export default ExperienceSection;