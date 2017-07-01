// Include React
import React from 'react'

// Import axios for http requests
import axios from 'axios'

//Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

// Include for animations
// import ReactCSSTransitionGroup from 'react-css-transition-group'

// Import components
import Portfolio from './body-children/Portfolio'
import About from './body-children/About'
import Contact from './body-children/Contact'

// Create Body component
class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            projects: [],
            emailSubmitted: false,
            emailSent: false,
            emailError: false
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.resetContact = this.resetContact.bind(this);
    }
    
    componentDidMount() {
        axios.get('/api/projects').then((projects) => {
            this.setState({ projects: projects.data })
        })
    }

    handleEmail(body) { 
        this.setState({emailSubmitted: true});
        axios.post('/api/mailer', body).then((sucess) => (this.setState({ emailSent: true }))).catch((error) => (this.setState({ emialError: true })));
    }

    resetContact() {
        console.log('reset')
        this.setState({
            emailSubmitted: false,
            emailSent: false,
            emailError: false
        })
    }

    render() {
        return (
            <div className="content-div border visible pad10">
                <HashRouter>
                    <div>
                        <Route exact path="/" component={About} />
                        <Route path="/About" component={About} />
                        <Route path="/Portfolio" component={(props) => (<Portfolio projects={this.state.projects}/>) }/>
                        <Route path="/Contact/:reset?" component={(props) => (<Contact resetContact={this.resetContact} handleEmail={this.handleEmail} submitted={this.state.emailSubmitted} sent={this.state.emailSent} error={this.state.emailError} />)} />
                    </div>
                </ HashRouter>
            </div>
        )
    }
}

// Export the component back for use in other files
export default Body