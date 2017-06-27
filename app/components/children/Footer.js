// Include React
import React from 'react'

import Headroom from 'react-headroom'

//Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

// Create Footer component
class Footer extends React.Component {
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
                    <div className="footer border pad10">
                        <div className="foot-section connect">
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
                        <div className="foot-section info">
                            ^^ built with React!
                        </div>
                        <div className="foot-section copyright">&#169; {this.state.date.getFullYear()}</div>
                    </div>
                </div>
            </Headroom>
        )
    }
}

// Export the component back for use in other files
export default Footer