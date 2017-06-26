// Include React
import React from 'react'

//Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

// Create Contact component
class Contact extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h2>Contact</h2>
                <form className="contact-form">
                    <hr />
                    <label htmlFor="name" >Name</label>
                    <div className="pad10-0">
                        <input className="field border" type="text" name="name" />
                    </div>
                    <label htmlFor="email" >Email</label>
                    <div className="pad10-0">
                        <input className="field border" type="text" name="email" />
                    </div>
                    <label htmlFor="message" >Message</label>
                    <div className="pad10-0 onleft">
                        <textarea className="message field border" name="message" />
                    </div>
                    <input type="submit" className="field border" />
                </form>
            </div>
        )
    }
}

// Export the component back for use in other files
export default Contact