// Include React
import React from 'react'

import Headroom from 'react-headroom'

//Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

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
                    <div className="header pad10">
                        <div className="head-section connect">
                            <div className="connect-container">
                                <span className="connect-span" >Connect with me:</span>
                                <span className="icon-span">
                                    <a href="https://github.com/asconwe"><i className="icon fa fa-github fa-2x" aria-hidden="true"></i></a>
                                    <a href="https://www.linkedin.com/in/august-conwell/"><i className="icon fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
                                    <a href="https://www.facebook.com/august.conwell"><i className="icon fa fa-facebook-official fa-2x" aria-hidden="true"></i></a>
                                    <a href="https://soundcloud.com/aconwell"><i className="icon fa fa-soundcloud fa-2x" aria-hidden="true"></i></a>
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