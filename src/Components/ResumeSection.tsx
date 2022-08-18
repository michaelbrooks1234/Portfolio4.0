import React from 'react'
import pdf from '../Resume.pdf'

class ResumeSection extends React.Component<any, any> {



    render() {
        return (
            <div className="ResumeSection" ref={this.props.passRef}>
                <embed className="ResumePDF" src={pdf}></embed>
            </div>
        )
    } 
}

export default ResumeSection;