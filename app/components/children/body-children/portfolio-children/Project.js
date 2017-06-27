// Include React
import React from 'react'

// Create Project component
class Project extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    getName() { 
        const index = this.props.description.indexOf(':')
        return this.props.description.slice(0, index);
    }
    getDescription() { 
        const index = this.props.description.indexOf(':')
        return this.props.description.slice(index + 1, length - 1);
    }
    render() {
        return (
            <div>
                <div className="project border pad10">
                    <h2>{this.getName()}</h2>
                    <p>{this.getDescription()}</p>
                    <a href={this.props.html_url}>GitHub</a>
                    {this.props.homepage ? <a href={this.props.homepage}>Live</a> : <div></div>}
                </div>
            </div>
        )
    }
}

// Export the component back for use in other files
export default Project