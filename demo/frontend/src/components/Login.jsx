import React, { Component } from 'react';
import UserService from '../services/UserService';
import { useNavigate } from "react-router-dom";
import { withRouter } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            loggedUser: ''
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.loggedUser = UserService.loggedUser;

        
    }

    changeUsernameHandler(e) {
        this.setState({username: e.target.value});
    }

    changePasswordHandler(e) {
        this.setState({password: e.target.value});
    }


    login(e) {
        e.preventDefault();
        let loginForm = { username: this.state.username, password: this.state.password };
        UserService.login(loginForm).then((res) => {
            //UserService.loggedUser = res.data.user;
            localStorage.setItem('user', JSON.stringify(res.data.user))
            localStorage.setItem('jwtToken', JSON.stringify(res.data.token))
            this.props.history.push('/');
            window.location.reload(false)
        }).catch((err) => {
            console.log(err);
        });

    }



    render() {
        return (
        <div>
            <div className="container" style={{"width":"80%"}}>
                    <div className="row">
                        <div className="col-lg-3 col-md-2"></div>

                        <div className="col-lg-6 col-md-8 login-box">
                            <form method="POST"  onSubmit={this.login.bind(this)}>
                                <div className="forma container">
                                    <div className="col-lg-12 login-key">
                                        <i className="bi bi-key" aria-hidden="true"></i>
                                    </div>
                                    <div className="col-lg-12 login-title">LOGIN</div><br/>
                                    <div className="form-group">
                                        <label className="label" htmlFor="username"><b>Username</b></label>
                                        <input className="input is-primary" style={{"width":"30%" }} type="text" value={this.state.username} onChange={this.changeUsernameHandler} required/>
                                    </div>
                                    <br/>


                                    <div className="form-group">
                                        <label className="label" htmlFor="password"><b>Password</b></label>
                                        <input className="input is-primary" style={{"width":"30%" }} type="password" value={this.state.password} onChange={this.changePasswordHandler}  required/>
                                    </div>
                                    <br/>
                                    <button className="button is-primary" type="submit">Login</button>
                                    <br/><br/>
                                    <div className="container signin">
                                        <p>Nemate nalog? <a href="#/register">Register</a>.</p><br/><br/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>	
                </div>
            </div>
        );
    }
}

export default Login;