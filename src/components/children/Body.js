// Include React
import React from 'react'

// Import axios for http requests
import axios from 'axios'

//Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Route,
} from 'react-router-dom'

// Include for animations
// import ReactCSSTransitionGroup from 'react-css-transition-group'

// Import components
import Portfolio from './body-children/Portfolio'
import About from './body-children/About'

// Create Body component
class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            projects: [],
        }
    }
    
    componentDidMount() {
        axios.get('https://api.github.com/users/asconwe/repos?sort=created')
            .then((repos) => {
                const filteredProjects = repos.data.filter(repo => repo.description && repo.description[repo.description.length - 1] === '*').reverse();
                this.setState({ projects: filteredProjects })
            })
    }

    render() {
        return (
            <div className="content-div border visible pad10">
                <HashRouter>
                    <div>
                        <Route exact path="/" component={About} />
                        <Route path="/About" component={About} />
                        <Route path="/Portfolio" component={(props) => (<Portfolio projects={this.state.projects}/>) }/>
                    </div>
                </ HashRouter>
            </div>
        )
    }
}

// Export the component back for use in other files
export default Body