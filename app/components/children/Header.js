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
            <Headroom disableInlineStyles>
                <div className="responsive-box" >
                    <div className="header border pad10">
                        <div className="head-section connect">
                            <div className="connect-container">
                                <span className="connect-span" >Connect with me:</span>
                                <span className="icon-span">
                                    <i className="icon fa fa-github fa-2x" aria-hidden="true"></i>
                                    <i className="icon fa fa-linkedin fa-2x" aria-hidden="true"></i>
                                    <i className="icon fa fa-facebook-official fa-2x" aria-hidden="true"></i>
                                    <i className="icon fa fa-soundcloud fa-2x" aria-hidden="true"></i>
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