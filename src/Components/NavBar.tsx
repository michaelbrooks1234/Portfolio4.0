import React from 'react';

class NavBar extends React.Component<any, any> {

    constructor(props:any) {
        super(props);
        this.state = {scrollToFunction: this.props.scrollFunction};

        this.introOnClick = this.introOnClick.bind(this);
    }

    openMichael(){
        window.open("https://www.linkedin.com/in/michael-brooksengineer/", '_blank')
    }

    introOnClick() {
        window.scrollTo(0,0);
        return;
    }

    render() {
        return (
        <div className="NavBar">
            <div className="NavBarContent">
                <div className="LeftNav">
                    <h1 className="NavName" onClick={this.openMichael}>
                       <span className="Purple">MICHAEL </span><span className="Blue">BROOKS</span>
                    </h1>
                </div>
                <div className="RightNav">
                    <ul>
                        <li onClick={this.introOnClick}>Intro</li>
                        <li onClick={() => {this.state.scrollToFunction("SecondaryBar")}}>Experience</li>
                        <li onClick={() => {this.state.scrollToFunction("ThirdBar")}}>Projects</li>
                        <li>Resume</li>
                    </ul>
                </div>    
            </div>
        </div>
        )
    }
}



export default NavBar;