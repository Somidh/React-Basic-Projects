import React from 'react'

export default function info() {

    return (
        <div className="info">
            <img className="avatar" src="craig-mckay-jmURdhtm7Ng-unsplash.jpg" width="40px" />
            <h1 className="name">Laura Smith</h1>
            <p className ="role">Frontend Developer</p>
            <p className="website">laurasmith.website</p>
            <div className="buttons">
                <button className="email-btn"><i className="fa-solid fa-envelope"></i>Email</button>
                <button className="linkedin-btn"><i className="fa-brands fa-linkedin"></i>Linkedin</button>

            </div>
        </div>
    )
}