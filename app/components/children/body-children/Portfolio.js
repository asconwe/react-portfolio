// Include React
import React from 'react'

//Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

// Create Portfolio component
class Portfolio extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                Portfolio
            </div>
        )
    }
}

// Export the component back for use in other files
export default Portfolio