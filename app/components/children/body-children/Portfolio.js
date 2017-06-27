// Include React
import React from 'react'

// Import axios for http requests
import axios from 'axios'

//Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

// Import component
import Project from './portfolio-children/Project'

// Create Portfolio component
class Portfolio extends React.Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }
    componentDidMount() {
        axios.get('/api/projects').then((projects) => {
            this.setState({ projects: projects.data })
        })
    }
    render() {
        return (
            <div>
                {this.state.projects.map((project, index) => {
                    return (
                        <div className="portfolio">
                            <Project name={project.name} description={project.description} html_url={project.html_url} homepage={project.homepage} key={index}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

// Export the component back for use in other files
export default Portfolio