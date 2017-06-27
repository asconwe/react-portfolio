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
                <div className="img-wrapper">
                    <img className="profile" src="./images/profile.jpg" alt="Me on a rooftop" />
                </div>
                <div className="about">
                    <h2>Me as a developer</h2>
                    <p>Full-stack web developer, able to build full-stack web applications from mockup to deployment. Adept in UI design, excellent team lead or role player, and a quick study in new technologies.</p>
                    <h2>Me as a human</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dicta consectetur veritatis vitae hic placeat ipsum sint non excepturi, repellat minima necessitatibus nobis cupiditate, quasi facilis, iste veniam explicabo mollitia.</p>
                </div>
            </div>
        )
    }
}

// Export the component back for use in other files
export default About