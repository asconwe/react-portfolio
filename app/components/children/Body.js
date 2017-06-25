// Include React
import React from 'react'

//Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

// Import components
import Portfolio from './body-children/Portfolio'
import Body from './children/Body'

// Create Body component
class Body extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="box">
                <Nav />
                <Body />
            </div>
        )
    }
}

// Export the component back for use in other files
export default Body