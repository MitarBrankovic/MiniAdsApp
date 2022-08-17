import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UserService from '../services/UserService';
import Swal from 'sweetalert2';

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

    redirectAllUsers(){
        this.props.history.push('/allUsers');
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

    checkIfUserIsAdmin(){
        if(this.state.loggedUser !== null && this.state.loggedUser.role.name === 'ROLE_ADMIN'){
            return true
        }
        return false
    }

    contactInfo(){
        Swal.fire({
            title: '<strong>Contact info</strong>',
            icon: 'info',
            html:
              'You can use find me on: ' +
              '<a href="https://github.com/MitarBrankovic">Github</a> ' +
              'and <a href="https://www.linkedin.com/in/mitar-brankovic/">LinkedIn</a>',
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
          })
    }

    helpDialog(){
        Swal.fire({
            title: '<strong>Help</strong>',
            icon: 'info',
            html:
              'Prilikom registrovanja korisnika, za sifru je potrebno uneti minimum 8 karaktera medju kojima je malo, veliko slovo, broj i specijalni karakter.<br><br>' + 
              'Za vec postojece korisnike koji se nalaze u skripti, sifra za admina je "admin", dok je za ostale korisnike "123" - kako bi se ubrzao postupak loginovanja.<br><br>' +
              'Slike su uradjene na najjednostavniji nacin jer nisam imao vremena da koristim String Base64 odnosno bajtove za cuvanje slika u bazi podataka - taj postupak se moze naci u ostalim mojim projektima.<br>' + 
              'Iz tog razloga prilikom "uploadovanja" slike, potrebno je izabrati neku od slika iz /public/images direktorijuma kako bi se ucitala ta slika, moze se manuelno dodati neka nova slika u taj folder.<br><br>' +
              'Proizvodi od ulogovanog korisnika su oznaceni zelenom bojom na pocetnoj stranici.<br><br>' + 
              'Kako bi se prikazali svi proizvodi ponovo, potrebno je anulirati sve vrednosti unutar search forme ili refresovati stranicu.<br><br>' + 
              'Sesija ulogovanog korisnika traje 15min, ako je istekla, potrebno je se ponovo ulogovati.',

            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
          })
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
                            <a className="navbar-item" style={{textDecoration: "none", }} onClick={this.contactInfo}>Contact</a>

                            <a className="navbar-item" style={{textDecoration: "none", }} onClick={this.helpDialog}>Help</a>

                            { (this.checkIfUserIsAdmin() && !UserService.isExpired()) ? <a className="navbar-item" style={{textDecoration: "none", }} onClick={this.redirectAllUsers.bind(this)}>All users</a> : null}

                            { (this.checkIfUserIsCommon() && !UserService.isExpired()) ? <a className="navbar-item" style={{textDecoration: "none", }} onClick={this.redirectAddNewAd.bind(this)}>Add new Ad</a> : null }
                        
                        </div>

                        <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                            
                            {
                                (this.state.loggedUser !== null && !UserService.isExpired()) ? <button className="button is-light" onClick={this.logout.bind(this)}>Logout</button> :
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