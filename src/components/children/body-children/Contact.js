// Include React
import React from 'react'

import Form from './contact-children/Form'
import Err from './contact-children/Err'
import Sent from './contact-children/Sent'
import Submitted from './contact-children/Submitted'

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
        const body = this.state;
        this.props.handleEmail(body)
    }

    render() {
        return (
            <div>
                {/*If submitted and sent, return Sent, else if error, return Error, else if submitted, return Submitted, else return Form*/}
                {this.props.error && <Err resetContact={this.props.resetContact} /> }
                {this.props.sent && !this.props.error && <Sent resetContact={this.props.resetContact} />}
                {this.props.submitted && !this.props.error && !this.props.sent && <Submitted />}    
                {this.props.error || this.props.sent || this.props.submitted || <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>}
            </div>
        )
    }
}

// Export the component back for use in other files
export default Contact