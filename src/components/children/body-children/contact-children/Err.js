import React from 'react'

const Err = (props) => {
    return (
        <div className="text-center contact-form">
            <h3>Sorry</h3>
            <p>There was an error processing your message. Please contact me directly on <a href="https://www.linkedin.com/in/august-conwell-04839aa6/">LinkedIn</a> or <a href="https://www.facebook.com/august.conwell">Facebook</a></p>
            <hr />
            <button className="pad10 border" onClick={props.resetContact}>Back</button>
        </div>
    )
}

export default Err