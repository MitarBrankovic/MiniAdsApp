import React, { Component } from 'react';
import AdService from '../services/AdService';
import Swal from 'sweetalert2';

class AddNewAd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: '',
            status: '',
            price: '',
            city: '',
            urlPhoto: '',
            loggedUser: JSON.parse(localStorage.getItem('user'))

        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeUrlPhotoHandler = this.changeUrlPhotoHandler.bind(this);
        
    }

    changeNameHandler(e) {
        this.setState({name: e.target.value});
    }

    changeDescriptionHandler(e) {
        this.setState({description: e.target.value});
    }

    changeStatusHandler(e) {
        this.setState({status: e.target.value});
    }

    changePriceHandler(e) {
        this.setState({price: e.target.value});
    }

    changeCityHandler(e) {
        this.setState({city: e.target.value});
    }

    changeUrlPhotoHandler(e) {
        this.setState({urlPhoto: e.target.value});

        const fileInput = document.querySelector('#file-ss input[type=file]');
        fileInput.onchange = () => {
          if (fileInput.files.length > 0) {
            const fileName = document.querySelector('#file-ss .file-name');
            fileName.textContent = fileInput.files[0].name;
          }
        }
    }

    addAd(e){
        e.preventDefault();
        let ad = {
            name: this.state.name,
            description: this.state.description,
            urlPhoto: this.state.urlPhoto.slice(12),
            price: this.state.price,
            status: this.state.status,
            username: this.state.loggedUser.username,
            city: this.state.city
        }

        AdService.addAd(ad).then(res => {
            Swal.fire(
                'Good job!',
                'You made new ad!',
                'success'
              )
            this.props.history.push('/')
            setTimeout(function(){window.location.reload()}, 1000);
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="container">    
                <div className="row">
                <div className="col-lg-3 col-md-2"></div>
                <div className="col-lg-6 col-md-8 login-box">
                <form id="registrationForm" method ="POST" onSubmit={this.addAd.bind(this)}>
                    <div className="container">
                        <div className="col-lg-12 login-key">
                            <i className="bi bi-bag-plus-fill" aria-hidden="true"></i>
                        </div>
                        <div className="col-lg-12 login-title">Add new Ad</div><br/>
                    
                        <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>Name</b></label>
                        <input name="nameInput" pattern="[a-zA-Z]+[a-zA-Z ]+" title="Enter letters only." className="input is-primary" style={{"width":"40%" }} type="text" value={this.state.name} onChange={this.changeNameHandler} required/>
                        <br/>

                        <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>Description</b></label>
                        <input name="nameInput" pattern="[a-zA-Z]+[a-zA-Z ]+" title="Enter letters only." className="input is-primary" style={{"width":"40%" }} type="text" value={this.state.description} onChange={this.changeDescriptionHandler} required/>
                        <br/>
                        
                        <label className="col-sm-4 col-form-label mt-2" htmlFor="surname"><b>Price</b></label>
                        <input pattern="[0-9]+" title="Enter numbers only." className="input is-primary" style={{"width":"40%" }} type="number" value={this.state.price} onChange={this.changePriceHandler} required/>
                        <br/>

                        <label className="col-sm-4 col-form-label mt-2" htmlFor="phoneNumber"><b>City</b></label>
                        <input pattern="[a-zA-Z]+[a-zA-Z ]+" title="Enter numbers only." className="input is-primary" style={{"width":"40%" }} type="text" value={this.state.city} onChange={this.changeCityHandler} required/>
                        <br/>
                        <div className="select mt-3 mb-3">
                            <select value={this.state.status} onChange={this.changeStatusHandler}>
                                <option value={""}>Select dropdown</option>
                                <option value={"clothing"}>Clothing</option>
                                <option value={"tools"}>Tools</option>
                                <option value={"sports"}>Sports</option>
                                <option value={"accessories"}>Accessories</option>
                                <option value={"furniture"}>Furniture</option>
                                <option value={"pets"}>Pets</option>
                                <option value={"games"}>Games</option>
                                <option value={"books"}>Books</option>
                                <option value={"technology"}>Technology</option>
                            </select>
                        </div>

                        <div id='file-ss' className="file is-info has-name">
                            <label className="file-label">
                                <input className="file-input" value={this.state.urlPhoto} onChange={this.changeUrlPhotoHandler} type="file" name="resume"/>
                                <span className="file-cta">
                                <span className="file-icon">
                                    <i className="fas fa-upload"></i>
                                </span>
                                <span className="file-label">
                                    Choose a file…
                                </span>
                                </span>
                                <span className="file-name">
                                    No file uploaded
                                </span>
                            </label>
                        </div>

                        <br/><br/>
                        
                        <button id="submit" className="button is-primary mb-5" type="submit">Add</button>
                    </div>
                </form>
                </div>
                </div>
            </div>
        );
    }
}

export default AddNewAd;