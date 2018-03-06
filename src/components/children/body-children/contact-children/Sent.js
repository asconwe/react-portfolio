import React from 'react'

const Sent = (props) => {
    return (
        <div className="text-center contact-form">
            {console.log(props)}
            <h3>Thank you for your message!</h3>
            <p>I'll be in touch as soon as possible</p>
            <hr />
            <button className="pad10 border" onClick={props.resetContact}>Back</button>
        </div>
    )
}

export default Sent