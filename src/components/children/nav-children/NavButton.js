// Include React
import React from 'react'

// Create NavButton component
class NavButton extends React.Component {
    constructor() {
        super();
        this.state = {
            hover: false
        }
    }

    render() {
        return (
            <div>
                <h3 tabIndex={this.props.tabIndex} className="button" data-page="about">{this.props.section}</h3>
            </div>
        )
    }
}

// Export the component back for use in other files
export default NavButton