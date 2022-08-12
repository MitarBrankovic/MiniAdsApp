import React, { Component } from 'react';


class Navbar extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }
    

    
    redirectLogin(){
        this.props.history.push('/login');
    }
    
    render() {
        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                        <img src={'https://bulma.io/images/bulma-logo.png'} width="112" height="28"/>
                        </a>

                        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                        <a className="navbar-item">
                            Home
                        </a>

                        <a className="navbar-item">
                            Documentation
                        </a>

                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                More
                                </a>

                                <div className="navbar-dropdown">
                                    <a className="navbar-item">
                                        About
                                    </a>
                                    <a className="navbar-item">
                                        Jobs
                                    </a>
                                    <a className="navbar-item">
                                        Contact
                                    </a>
                                    <hr className="navbar-divider"/>
                                    <a className="navbar-item">
                                        Report an issue
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <button className="button is-light" onClick={this.redirectLogin.bind(this)}>
                                Log in
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </nav>
            </div>
        );
    }
}

export default Navbar;