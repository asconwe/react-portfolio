// Include React
import React from 'react'

import profile from '../../../images/profile.jpg'

// Create About component
class About extends React.Component {

    render() {
        return (
            <div>
                <h2>About me</h2>
                <hr />
                <div className="about">
                    <h2>as a developer</h2>
                    <p>Enjoy the challenge of building full-stack web applications from mockup to deployment. Adept in UI design, comfortable as team lead or role player, a quick study in new technologies.</p>
                    <div className="img-wrapper">
                        <img className="profile" src={profile} alt="Me on a rooftop" />
                    </div>
                    <h2>as a human</h2>
                    <p>Located in Northern Virginia, love making music, antiquing, and ice-hockey. Also colorblind and a distant cousin of Mister Rogers.</p>
                    <hr />
                    <h2>About this portfolio</h2>
                    <p>Built with React and Node.js - dynamically pulls and parses GitHub repos as portfolio projects.</p>
                    <a href="https://github.com/asconwe/react-portfolio">View the GitHub repository</a>
                </div>
            </div>
        )
    }
}

// Export the component back for use in other files
export default About