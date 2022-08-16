import React, { Component } from 'react';
import AdService from '../services/AdService';
import Moment from 'moment';
import Swal from 'sweetalert2';

class SelectedAd extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ad: '',
            loggedUser: JSON.parse(localStorage.getItem('user')),
            name: '',
            description: '',
            status: '',
            price: '',
            city: '',
            urlPhoto: '',
            isEdit: false
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

    editAdHandler() {
        this.setState({
            isEdit: true
        })
    }

    cancelEditHandler(){
        this.setState({
            isEdit: false
        })
    }

    checkIfMyAd(){
        if(this.state.loggedUser !== null && this.state.ad.userApp.id === this.state.loggedUser.id){
            return true;
        }
        return false;
    }

    deleteAd(){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                AdService.deleteAd(this.state.ad.id).then(()=>{
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    this.props.history.push('/');
                    setTimeout(function(){window.location.reload()}, 1000);
                }).catch(err=>{
                    console.log(err);
                })
            }
          })
    }

    render() {
        return (
            <div className="container columns">
                <div className="column">
                        <div className="col-lg-12 login-key">
                            <i className="bi bi-bag-plus-fill" aria-hidden="true"></i>
                        </div>
                        <div className="col-lg-12 login-title">BLAA</div><br/>

                        {!this.state.isEdit ? 
                        <div>
                            <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>Name</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{this.state.ad.name}</label><br/>

                            <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>Description</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{this.state.ad.description}</label><br/>

                            <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>Price</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{this.state.ad.price}</label><br/>
                            
                            <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>City</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{this.state.ad.city}</label><br/>

                            <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>Category</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{this.state.ad.status}</label><br/>

                            {this.checkIfMyAd ? 
                            <div className='mt-3'>
                                <button className='button is-info' onClick={this.editAdHandler.bind(this)}>Edit</button>
                                <button className='button is-danger ml-2' onClick={this.deleteAd.bind(this)}>Delete</button>
                            </div> : null}
                        </div> 
                        
                        :<div>                   
                            <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>Name</b></label>
                            <input name="nameInput" pattern="[a-zA-Z]+[a-zA-Z ]+" title="Enter letters only." className="input is-primary" style={{"width":"40%" }} type="text" value={this.state.ad.name} onChange={this.changeNameHandler} required/>
                            <br/>

                            <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>Description</b></label>
                            <input name="nameInput" pattern="[a-zA-Z]+[a-zA-Z ]+" title="Enter letters only." className="input is-primary" style={{"width":"40%" }} type="text" value={this.state.ad.description} onChange={this.changeDescriptionHandler} required/>
                            <br/>
                            
                            <label className="col-sm-4 col-form-label mt-2" htmlFor="surname"><b>Price</b></label>
                            <input pattern="[0-9]+" title="Enter numbers only." className="input is-primary" style={{"width":"40%" }} type="number" value={this.state.ad.price} onChange={this.changePriceHandler} required/>
                            <br/>

                            <label className="col-sm-4 col-form-label mt-2" htmlFor="phoneNumber"><b>City</b></label>
                            <input pattern="[a-zA-Z]+[a-zA-Z ]+" title="Enter numbers only." className="input is-primary" style={{"width":"40%" }} type="text" value={this.state.ad.city} onChange={this.changeCityHandler} required/>
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

                            {this.checkIfMyAd ? 
                            <div className='mt-5'>
                                <button className='button is-primary' onClick={this.editAdHandler.bind(this)}>Save</button>
                                <button className='button is-light ml-3' onClick={this.cancelEditHandler.bind(this)}>Cancel</button>
                            </div> : null}
                        </div>
                        }

                        <br/><br/>
                   </div>   

                   <div className='column'>
                        <div className='containter'>
                            <h4 className='is-center'>Information about seller</h4>

                            <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>Username</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{this.state.loggedUser.username}</label><br/>

                            <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>First name</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{this.state.loggedUser.firstName}</label><br/>

                            <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>Last name</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{this.state.loggedUser.lastName}</label><br/>

                            <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>Phone number</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{this.state.loggedUser.phoneNumber}</label><br/>

                            <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>Date of registration</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{Moment(this.state.loggedUser.dateOfRegistrion).format('DD.MM.YYYY.')}</label><br/>
                        </div>
                    </div>  
            </div>
        );
    }

    componentDidMount() {

        AdService.getAd(this.props.match.params.id).then((res)=>{
            this.setState({
                ad: res.data
            })
        })
    }
}


export default SelectedAd;