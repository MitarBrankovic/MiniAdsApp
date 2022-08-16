import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loggedUser: JSON.parse(localStorage.getItem('user'))
        }

    }
    
    componentDidMount() {
        this.loggedUser = JSON.parse(localStorage.getItem('user'))
    }

    redirectHome(){
        this.props.history.push('/');
        window.location.reload()
    }
    
    redirectLogin(){
        this.props.history.push('/login');
        window.location.reload()
    }

    redirectRegister(){
        this.props.history.push('/register');
        window.location.reload()
    }

    redirectAddNewAd(){
        this.props.history.push('/addNewAd');
        window.location.reload()
    }

    logout(){
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.clear()
        window.location.reload()
    }

    checkIfUserIsCommon(){
        if(this.state.loggedUser !== null && this.state.loggedUser.role.name === 'ROLE_COMMON'){
            return true
        }
        return false
    }
    
    render() {
        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation" style={{backgroundImage: "linear-gradient(to bottom left, PaleTurquoise, MintCream)"}}>
                    <div className="navbar-brand">
                        <a className="navbar-item" onClick={this.redirectHome.bind(this)}>
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
                            <a className="navbar-item" style={{textDecoration: "none", }}>Home</a>

                            <a className="navbar-item" style={{textDecoration: "none", }}>Documentation</a>

                            { this.checkIfUserIsCommon() ? <a className="navbar-item" style={{textDecoration: "none", }} onClick={this.redirectAddNewAd.bind(this)}>Add new Ad</a> : null }
                        
                        </div>

                        <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                            
                            {
                                this.state.loggedUser !== null ? <button className="button is-light" onClick={this.logout.bind(this)}>Logout</button> :
                                <div>
                                    <a className="button is-primary" onClick={this.redirectRegister.bind(this)}><strong>Sign up</strong></a>
                                    <button className="button is-light" onClick={this.redirectLogin.bind(this)}>Log in</button>
                                </div>
                            } 
                            
                            </div>
                        </div>
                        </div>
                    </div>
                    </nav>
            </div>
        );
    }
}

export default withRouter(Navbar);