// Include React
import React from 'react'

//Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

// Create About component
class About extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h2>About me</h2>
                <hr />
                <div className="about">
                    <h2>as a developer</h2>
                    <p>Enjoy the challenge of building full-stack web applications from mockup to deployment. Adept in UI design, team lead or role player, a quick study in new technologies.</p>
                    <div className="img-wrapper">
                        <img className="profile" src="./images/profile.jpg" alt="Me on a rooftop" />
                    </div>
                    <h2>as a human</h2>
                    <p>Located in Northern Virginia, love making music, antiquing, and ice-hockey. Also colorblind and a distant cousin of Mister Rogers</p>
                    <hr />
                    <h2>About this portfolio</h2>
                    <p>Built with React and node js - dynamically pulls and parses GitHub repos as portfolio projects</p>
                    <a href="">View the GitHub repository</a>
                </div>
            </div>
        )
    }
}

// Export the component back for use in other files
export default About