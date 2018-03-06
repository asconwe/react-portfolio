// Include React
import React from 'react'

// Import component
import Project from './portfolio-children/Project'

// Create Portfolio component
class Portfolio extends React.Component {

    render() {
        return (
            <div>
                <h2>Projects</h2>
                <hr />
                {this.props.projects.reverse().map((project, index) => {
                    return (
                        <div className="portfolio" key={index}>
                            <Project name={project.name} description={project.description} html_url={project.html_url} homepage={project.homepage} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

// Export the component back for use in other files
export default Portfolio