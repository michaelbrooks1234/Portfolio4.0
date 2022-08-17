import React from 'react'
import Websites from './Websites'
import GuiApp from './GuiApp'
import PythonApi from './PythonApi'

class ThirdBar extends React.Component<any, any> {

    constructor(props: any) {
    super(props);
    this.state = {setSection: props.setSelection, passRef: props.passRef}
    
    this.selectSection = this.selectSection.bind(this);
    }

    selectSection(section: string){
            if(section === "Websites"){
                this.state.setSection(<Websites/>);
            }else if (section === "Calculator"){
                this.state.setSection(<GuiApp/>);
            }else if (section === "PythonApi"){
                this.state.setSection(<PythonApi/>);
            }
        return;
    }

    render(){
       return(
        <div className="ThirdBar" ref={this.state.passRef}>
            <ul>
                <li onClick={() => {this.selectSection('Websites')}}>Portfolios</li>
                <li onClick={() => {this.selectSection('Calculator')}}>C++ GUI calculator APP</li>
                <li onClick={() => {this.selectSection('PythonApi')}}>Python API App</li>
            </ul>
        </div>
       ) 
    }
}


export default ThirdBar;