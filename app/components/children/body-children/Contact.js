// Include React
import React from 'react'

//Including axios for requests;
import axios from 'axios'

// Create Contact component
class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        const obj = {};
        const { name, value } = event.target;
        obj[name] = value;
        this.setState(obj);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        axios.post('/api/mailer', this.state).then((sucess) => (console.log('message sent')));
    }

    render() {
        return (
            <div>
                <h2>Contact</h2>
                <form className="contact-form" onSubmit={this.handleSubmit}>
                    <hr />
                    <label htmlFor="name" >Name</label>
                    <div className="pad10-0">
                        <input className="field border" type="text" name="name" onChange={this.handleChange} />
                    </div>
                    <label htmlFor="email" >Email</label>
                    <div className="pad10-0">
                        <input className="field border" type="text" name="email" onChange={this.handleChange}/>
                    </div>
                    <label htmlFor="message" >Message</label>
                    <div className="pad10-0 onleft">
                        <textarea className="message field border pad10" name="message" onChange={this.handleChange}/>
                    </div>
                    <input type="submit" className="field border" />
                </form>
            </div>
        )
    }
}

// Export the component back for use in other files
export default Contact