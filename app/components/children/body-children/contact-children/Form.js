import React from 'react'

class Form extends React.Component {
    constructor() {
        super()


    }

    render() {
        return (
            <div>
                <h2>Contact</h2>
                <form className="contact-form" onSubmit={this.props.handleSubmit}>
                    <hr />
                    <label htmlFor="name" >Name</label>
                    <div className="pad10-0">
                        <input className="field border" type="text" name="name" onChange={this.props.handleChange} />
                    </div>
                    <label htmlFor="email" >Email</label>
                    <div className="pad10-0">
                        <input className="field border" type="text" name="email" onChange={this.props.handleChange} />
                    </div>
                    <label htmlFor="message" >Message</label>
                    <div className="pad10-0 onleft">
                        <textarea className="message field border pad10" name="message" onChange={this.props.handleChange} />
                    </div>
                    <input type="submit" className="field border" />
                </form>
            </div>    
        )

    }
}

export default Form