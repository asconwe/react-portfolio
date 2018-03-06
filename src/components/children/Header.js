// Include React
import React from 'react'

import Headroom from 'react-headroom'

import github from '../../images/github.svg'
import facebook from '../../images/facebook.svg'
import linkedin from '../../images/linkedin.svg'
import soundcloud from '../../images/soundcloud.svg'

// Create Header component
class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }

    render() {
        return (
            <Headroom>
                <div className="responsive-box" >
                    <div className="header pad10 border">
                        <div className="head-section connect">
                            <div className="connect-container">
                                <span className="icon-span">
                                    <a href="https://github.com/asconwe"><img src={github} alt="GitHub logo" className="connect-logo" /></a>
                                    <a href="https://www.linkedin.com/in/august-conwell"><img src={linkedin} alt="LinkedIn logo" className="connect-logo" /></a>
                                    <a href="https://www.facebook.com/august.conwell"><img src={facebook} alt="Facebook logo" className="connect-logo" /></a>
                                    <a href="https://soundcloud.com/aconwell"><img src={soundcloud} alt="Soundcloud logo" className="connect-logo" /></a>
                                </span>
                            </div>
                        </div>
                        <div className="head-section info"><h3> ...built with React!</h3></div>
                        <div className="head-section copyright">a.conwell &#169; {this.state.date.getFullYear()}</div>
                    </div>
                </div>
            </Headroom>
        )
    }
}

// Export the component back for use in other files
export default Header