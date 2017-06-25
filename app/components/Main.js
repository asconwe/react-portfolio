// Include React
import React from 'react'

// Import components
import Title from './children/Title'
import Nav from './children/Nav'
import Body from './children/Body'
import Footer from './children/Footer'

// Create Main component
class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            homeView: true
        }
    }

    render() {
        return (
            <div className="responsive-box center">
                <Title homeView={this.state.homeView} />
                <Nav smallScreen={this.state.smallScreen} landscape={this.state.landscape} homeView={this.state.homeView} />
                <Body />
                <Footer />
            </div>
        )
    }
}

// Export the component back for use in other files
export default Main