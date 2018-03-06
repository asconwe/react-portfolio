// Include React
import React from 'react'

import logo from '../../images/logo.svg'

// Create Title component
class Title extends React.Component {
    render() {
        return (
            <div className="banner">
                <div className="title">
                    <h1 className="name">August
                        <img className="logo-img" src={logo} alt="logo" />
                        Conwell
                    </h1>
                </div>
            </div>
        )
    }
}

// Export the component back for use in other files
export default Title