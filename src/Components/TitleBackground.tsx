import React from 'react';

class TitleBackground extends React.Component<any, any> {
    constructor(props: any) {
    super(props);
    this.state = {headshot: props.headShot, arrow: props.arrow, scrollClick: props.scrollFunction}; 
    }

    render() {
        return (
            <div className="TitleBackground">
                <div className="TextContainer">
                    <h1 className="Title0">HELLO, MY NAME IS:</h1>
                    <h1 className="Title"><span className="Michael">Michael</span> Brooks</h1>
                    <h1 className="Title2">A software engineer specializing in full stack development. <span className="Purple">The backend</span>, <span className="Blue">the frontend</span>, and <span className="LightBlue">the inbetween</span>. I love learning new technologies to create things with and hope you enjoy learning about me!</h1>
                </div>
                <div className="DecorationContainer">
                    <div className="DecorativeBubblePurples"></div>
                    <div className=""></div>
                </div>
                <div className="HeadShotContainer">
                    <img src={this.state.headshot} className="HeadShotImage" alt="HeadShotImage"/>
                    <div className="DecorativeBorder"/>
                    <div className="DecorativeBubblePurple"/>
                    <div className="DecorativeBubbleBlue"/>
                    <div className="DecorativeBubbleLightBlue"/>
                    <div className="DecorativeBubbleMediumPurple"/>
                </div>
                <div className="ExperienceThingContainer">
                    <h1 className="ExperienceTitle" onClick={() => {this.state.scrollClick("SecondaryBar")}}>
                        EXPERIENCE
                    </h1>
                    <img className="Arrow" alt="arrow :)" src={this.props.arrow}/>
                </div> 
                <div className="ExperienceSectionIntroContainer">
                    <h1 className="ExperienceSectionIntroText">
                         This Next Section is a summary of every position I have held.
                    </h1> 
                </div>
            </div>
        )
    }
}

export default TitleBackground;