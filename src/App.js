import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import Image from '../src/imgs/me.jpg'
import './css/style.css'
import About from '../src/components/about'
import Socials from '../src/components/socials'

function App() {
    return (
        <Router>
            <div className="jumbotron jumbotron-fluid vertical-center">
                <div className="container">
                    <div className="row">
                        <div className="col-sm" align="center">
                            <img className="portrait" alt="selfie" src={Image} width="200"/>
                            <h2 className="title-name">Raymond You</h2>
                            <div className="title">
                                <span className="blue">Software Engineer</span>
                                <span> @ </span>
                                <span className="purple">Datadog</span></div>
                        </div>
                        <div className="col-sm bottom-col-sm" align="center">
                            <div className="intro">
                                <Route path="/" exact component={About}/>
                                <Route path="/socials" exact component={Socials}/>
                            </div>
                            <div className="row links">
                                <div className="col-6">
                                    <Link className="btn btn-outline-info" type="button" to="/">About Me</Link>
                                </div>
                                <div className="col-6">
                                    <Link className="btn btn-outline-success" type="button" to="/socials">Socials</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
