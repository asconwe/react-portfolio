// Include React
import React from 'react'

// Import axios for http requests
import axios from 'axios'

//Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Route,
} from 'react-router-dom'

// Include for animations
// import ReactCSSTransitionGroup from 'react-css-transition-group'

// Import components
import Portfolio from './body-children/Portfolio'
import About from './body-children/About'

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
        axios.get('http://api.github.com/users/asconwe/repos?sort=created')
            .then((repos) => {
                console.log(repos)
                const filteredProjects = repos.data.filter(repo => repo.description && repo.description[repo.description.length - 1] === '*').reverse();
                this.setState({ projects: filteredProjects })
            })
    }

    handleEmail(body) { 
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        this.setState({emailSubmitted: true});
        axios({
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: 'https://formspree.io/asconwell@gmail.com',
            method: 'post',
            data: `name=${body.name}&email=${body.email}$text=${body.text}`
        })
            .then((sucess) => (this.setState({ emailSent: true })))
            .catch((error) => (this.setState({ emialError: true })));
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
                    </div>
                </ HashRouter>
            </div>
        )
    }
}

// Export the component back for use in other files
export default Body