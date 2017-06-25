// Include React
import React from 'react'

// Import components
import Nav from './children/Nav'
import Body from './children/Body'

// Create Main component
class Main extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="box">
                <Nav />
                <Body />
            </div>
        )
    }
}

// Export the component back for use in other files
export default Main