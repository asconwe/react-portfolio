// Include React
import React from 'react'

// Import components
import Title from './children/Title'
import Nav from './children/Nav'
import Body from './children/Body'
import Header from './children/Header'

// Import css
import '../css/reset.css';
import '../css/style.css';

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
                <Header />
                <Title homeView={this.state.homeView} />
                <Nav smallScreen={this.state.smallScreen} landscape={this.state.landscape} homeView={this.state.homeView} />
                <Body />
            </div>
        )
    }
}

// Export the component back for use in other files
export default Main