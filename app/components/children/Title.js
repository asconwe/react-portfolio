// Include React
import React from 'react'

//Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

// Create Title component
class Title extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="banner">
                <div className="title">
                    <h1 className="name">August
                        <img className="logo-img" src="./images/logo.svg" alt="logo" />
                        Conwell
                    </h1>
                </div>
            </div>
        )
    }
}

// Export the component back for use in other files
export default Title