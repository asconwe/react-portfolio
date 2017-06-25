// Include React
import React from 'react'

//Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

// Include for animations
// import ReactCSSTransitionGroup from 'react-css-transition-group'

// Import components
import Portfolio from './body-children/Portfolio'
import About from './body-children/About'
import Contact from './body-children/Contact'

// Create Body component
class Body extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="content-div border invisible">
                <HashRouter>
                    <div>
                        <Route path="/About" component={About} />
                        <Route path="/Portfolio" component={Portfolio} />
                        <Route path="/Contact" component={Contact} />
                    </div>
                </ HashRouter>
            </div>
        )
    }
}

// Export the component back for use in other files
export default Body