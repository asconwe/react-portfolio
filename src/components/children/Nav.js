// Include React
import React from 'react'

//Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Link
} from 'react-router-dom'

import NavButton from './nav-children/NavButton'

// Create Nav component
class Nav extends React.Component {
    render() {
        return (
            <div className="welcome border pad10">
                <div>
                        <HashRouter>
                            <div className="options">
                                <Link className="nav-button" to="/About">
                                    <NavButton section="About" tabIndex="0" />
                                </ Link>
                                <Link className="nav-button" to="/Portfolio">
                                    <NavButton section="Portfolio" tabIndex="1" />
                                </ Link>
                            </div>
                        </HashRouter>
                </div>
            </div>
        )
    }
}

// Export the component back for use in other files
export default Nav