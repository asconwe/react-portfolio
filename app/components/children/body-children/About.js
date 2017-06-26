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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea praesentium ipsum, quisquam labore ex eaque, aliquam, quae odio sint debitis harum nisi a cum delectus inventore fugit officia reprehenderit totam delectus repellendus. Accusamus voluptas vitae voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    <p>Incidunt placeat saepe est impedit possimus! Soluta aut ullam inventore fugit officia reprehenderit totam delectus voluptatibus nihil. Quasi assumenda accusamus commodi repellat.</p>
                </div>
            </div>
        )
    }
}

// Export the component back for use in other files
export default About