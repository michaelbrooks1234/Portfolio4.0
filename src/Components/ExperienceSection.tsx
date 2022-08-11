import React from 'react';

class ExperienceSection extends React.Component<any,any>{
     
    props: any;

    introClick(){
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <div className='ExperienceSectionContainer'>
                <div className="ExperienceBobble">
                    <img src={this.props.arrow} className="ArrowReversed" alt="arrow"/>
                    <h1 className="IntroBobble" onClick={this.introClick}>Intro</h1>
                </div>
                <div className='ExperienceSubContainer'>
                    {this.props.selected}
                </div>
                <div className="ProjectsArrow">
                   <h1 className="ProjectsBobble">Projects</h1>
                   <img src={this.props.arrow} alt="arrow" className="ProjectArrow"/> 
                   <h1 className="ProjectsDesc">Down here are my projects.</h1>
                </div>
            </div>
        )
    }
}

export default ExperienceSection;