// Include React
import React from 'react'

//Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

import NavButton from './nav-children/NavButton'

// Create Nav component
class Nav extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="welcome border pad10">
                <div className="options">
                    <div className="box">
                        <HashRouter>
                            <div>
                                <Link to="/About">
                                    <NavButton section="About" tabIndex="0" />
                                </ Link>
                                <Link to="/Portfolio">
                                    <NavButton section="Portfolio" tabIndex="1" />
                                </ Link>
                                <Link to="/Contact">
                                    <NavButton section="Contact" tabIndex="2" />
                                </ Link>
                            </div>
                        </HashRouter>
                    </div>
                </div>
            </div>
        )
    }
}

// Export the component back for use in other files
export default Nav