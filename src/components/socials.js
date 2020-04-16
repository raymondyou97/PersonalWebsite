import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYelp, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Socials = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <span className="social-icon">
                    <FontAwesomeIcon icon={faUserCircle} />
                </span>
                <span className="social-text">
                    <span className="social-link">Raymond You</span>
                </span>
            </li>
            <li className="list-group-item">
                <span className="social-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="social-text">
                    <a className="social-link" href="mailto: raymondyou97@gmail.com">raymondyou97@gmail.com</a>
                </span>
            </li>
            <li className="list-group-item">
                <span className="social-icon">
                    <FontAwesomeIcon icon={faLinkedin} />
                </span>
                <span className="social-text">
                    <a className="social-link" href="https://linkedin.com/in/raymondyou97/">linkedin</a>
                </span>
            </li>
            <li className="list-group-item">
                <span className="social-icon">
                    <FontAwesomeIcon icon={faGithub} />
                </span>
                <span className="social-text">
                    <a className="social-link" href="https://github.com/raymondyou97">github</a>
                </span>
            </li>
            <li className="list-group-item">
                <span className="social-icon">
                    <FontAwesomeIcon icon={faInstagram} />
                </span>
                <span className="social-text">
                    <a className="social-link" href="https://instagram.com/ray.youuuu/">instagram</a>
                </span>
            </li>
            <li className="list-group-item">
                <span className="social-icon">
                    <FontAwesomeIcon icon={faYelp} />
                </span>
                <span className="social-text">
                    <a className="social-link" href="https://yelp.com/user_details_reviews_self?userid=WT6yryyLUiDLLcvNfwOH3A">yelp</a>
                </span>
            </li>
        </ul>
    )
}

export default Socials;
