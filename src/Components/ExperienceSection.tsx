import React from 'react';

class ExperienceSection extends React.Component {

    props: any;
    render(){
        return (
            <div className='ExperienceSectionContainer'>
                {this.props.selected}
            </div>
        )
    }
}

export default ExperienceSection;