import React, { Component } from 'react';
import UserService from '../services/UserService';

class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            dateOfRegistration: '',
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeConfirmPasswordHandler = this.changeConfirmPasswordHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.changeDateOfRegistrationHandler = this.changeDateOfRegistrationHandler.bind(this);
        
    }
//onChange={this.check_pass().bind(this)}
    changeUsernameHandler(e) {
        this.setState({username: e.target.value});
    }

    changePasswordHandler(e) {
        this.setState({password: e.target.value});

        if (document.getElementById('password').value ===
                document.getElementById('confirmPassword').value) {
            document.getElementById('submit').disabled = false;
        } else {
            document.getElementById('submit').disabled = true;
        } 
    }

    changeConfirmPasswordHandler(e) {
        this.setState({confirmPassword: e.target.value});

        if (document.getElementById('password').value ===
                document.getElementById('confirmPassword').value) {
            document.getElementById('submit').disabled = false;
        } else {
            document.getElementById('submit').disabled = true;
        } 
    }

    changeFirstNameHandler(e) {
        this.setState({firstName: e.target.value});
    }

    changeLastNameHandler(e) {
        this.setState({lastName: e.target.value});
    }

    changePhoneNumberHandler(e) {
        this.setState({phoneNumber: e.target.value});
    }

    changeDateOfRegistrationHandler(e) {
        this.setState({dateOfRegistration: e.target.value});
    }


    register(e) {
        e.preventDefault();
        let registerDto = {
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            dateOfRegistration: this.state.dateOfRegistration,
        }
        UserService.register(registerDto).then(response => {
            UserService.swalSuccess('Registered successfully');
            this.props.history.push('/');
            window.location.reload();
        }).catch(error => {
            console.log(error);
        });
    }


    render() {
        return (
            <div className="container">    
                <div className="row">
                <div className="col-lg-3 col-md-2"></div>
                <div className="col-lg-6 col-md-8 login-box">
                <form id="registrationForm" method ="POST" onSubmit={this.register.bind(this)}>
                    <div className="container">
                        <div className="col-lg-12 login-key">
                            <i className="bi bi-file-person" aria-hidden="true"></i>
                        </div>
                        <div className="col-lg-12 login-title">REGISTRACIJA</div><br/>
                    
                        <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>Username</b></label>
                        <input name="nameInput" pattern="[a-zA-Z]+[a-zA-Z ]+" title="Enter letters only." className="input is-primary" style={{"width":"40%" }} type="text" value={this.state.username} onChange={this.changeUsernameHandler} required/>
                        <br/>

                        <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>Name</b></label>
                        <input name="nameInput" pattern="[a-zA-Z]+[a-zA-Z ]+" title="Enter letters only." className="input is-primary" style={{"width":"40%" }} type="text" value={this.state.firstName} onChange={this.changeFirstNameHandler} required/>
                        <br/>
                        
                        <label className="col-sm-4 col-form-label mt-2" htmlFor="surname"><b>Surname</b></label>
                        <input pattern="[a-zA-Z]+[a-zA-Z ]+" title="Enter letters only." className="input is-primary" style={{"width":"40%" }} type="text" value={this.state.lastName} onChange={this.changeLastNameHandler} required/>
                        <br/>

                        <label className="col-sm-4 col-form-label mt-2" htmlFor="password"><b>Password</b></label>
                        <input id="password" pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}" className="input is-primary" style={{"width":"40%" }} minLength="8" type="password" value={this.state.password} onChange={this.changePasswordHandler} required/>
                        <br/>
                        
                        <label className="col-sm-4 col-form-label mt-2" htmlFor="password-repeat"><b>Repeat password</b></label>
                        <input id="confirmPassword" pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}" className="input is-primary" style={{"width":"40%" }} minLength="8" type="password" value={this.state.confirmPassword} onChange={this.changeConfirmPasswordHandler}  required/>
                        <br/>


                        <label className="col-sm-4 col-form-label mt-2" htmlFor="phoneNumber"><b>PhoneNumber</b></label>
                        <input pattern="[0-9]+" title="Enter numbers only." className="input is-primary" style={{"width":"40%" }} type="text" value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler} required/>
                        <br/><br/>
                        
                        <button id="submit" className="button" type="submit" disabled>Register</button>
                        <div className="container signin">
                            <p>Vec imate nalog? <a href="#/login">Sign in</a>.</p>
                        </div>
                    </div>
                </form>
                </div>
                </div>
            </div>

        );
    }
}

export default Register;