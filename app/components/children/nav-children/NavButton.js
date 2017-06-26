// Include React
import React from 'react'

//Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

// Create NavButton component
class NavButton extends React.Component {
    constructor() {
        super();
        this.state = {
            hover: false
        }
    }

    render() {
        return (
            <div>
                <h3 tabIndex={this.props.tabIndex} className="button" data-page="about">{this.props.section}<span className="hover-dash"></span></h3>
            </div>
        )
    }
}

// Export the component back for use in other files
export default NavButton