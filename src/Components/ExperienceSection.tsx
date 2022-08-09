import React from 'react';

class ExperienceSection extends React.Component<any,any>{
     
    props: any;

    render(){
        return (
            <div className='ExperienceSectionContainer'>
                <div className="ExperienceBobble">
                    <img src={this.props.arrow} className="ArrowReversed" alt="arrow"/>
                    <h1 className="IntroBobble">Intro</h1>
                </div>
                <div className='ExperienceSubContainer'>
                    {this.props.selected}
                </div>
            </div>
        )
    }
}

export default ExperienceSection;