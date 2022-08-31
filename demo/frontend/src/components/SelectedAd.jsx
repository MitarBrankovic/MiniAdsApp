import React, { Component } from 'react';
import AdService from '../services/AdService';
import Moment from 'moment';
import Swal from 'sweetalert2';
import UserService from '../services/UserService';
import firebase from 'firebase/compat/app';
import "firebase/compat/database";


export const snapshotToArray = (snapshot) => {
    const returnArr = [];
  
    snapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
  
    return returnArr;
  };

class SelectedAd extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ad: '',
            owner: '',
            loggedUser: JSON.parse(localStorage.getItem('user')),
            name: '',
            description: '',
            status: '',
            price: '',
            city: '',
            urlPhoto: '',
            isEdit: false,

            adsByUser: [],
            urlPhotoHelper: '',
            roomname: ''
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
        this.setState({urlPhoto: (e.target.value).slice(12)});

        const fileInput = document.querySelector('#file-ss input[type=file]');
        fileInput.onchange = () => {
          if (fileInput.files.length > 0) {
            const fileName = document.querySelector('#file-ss .file-name');
            fileName.textContent = fileInput.files[0].name;
          }
        }
    }

    updateAd() {
        let dto = {
            name: this.state.name,
            description: this.state.description,
            urlPhoto: this.state.urlPhoto,
            price: this.state.price,
            status: this.state.status,
            username: this.state.loggedUser.username,
            city: this.state.city
        }

        this.setState({
            isEdit: false
        })

        AdService.updateAd(this.state.ad.id, dto).then(()=>{
            Swal.fire(
                'Ad successfully updated!',
                'Your ad has been updated.',
                'success'
              )
            setTimeout(function(){window.location.reload()}, 1000);
        }).catch(err=>{
            Swal.fire(
                'Error!',
                'Your ad has not been updated.',
                'error'
              )
        })
    }

    openEditHandler(){
        this.setState({
            isEdit: true
        })
    }

    cancelEditHandler(){
        this.setState({
            isEdit: false
        })
    }

    checkIfMyAd(e){
        e.preventDefault();
        if(this.state.loggedUser !== null && this.state.owner.id === this.state.loggedUser.id){
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

    message(){

        this.checkRoomname()

        firebase.database().ref('roomusers/').orderByChild('roomname').equalTo(this.state.roomname).on('value', (resp) => {
            
            let roomuser = [];
            roomuser = snapshotToArray(resp);
            const user = roomuser.find(x => x.username === this.state.loggedUser.username);
            if (user !== undefined) {
              const userRef = firebase.database().ref('roomusers/' + user.key);
              userRef.update({status: 'online'});
            } else {
              const newroomuser = { roomname: '', username: '', status: '' };
              newroomuser.roomname = this.state.roomname;
              newroomuser.username = this.state.loggedUser.username;
              newroomuser.status = 'online';
              const newRoomUser = firebase.database().ref('roomusers/').push();
              newRoomUser.set(newroomuser);
            }
          });
    }

    checkRoomname(){
        this.state.roomname = this.state.loggedUser.username + this.state.owner.username;
        firebase.database().ref('roomusers/').orderByChild('roomname').on('value', (resp) => {    
            let roomuser = [];
            roomuser = snapshotToArray(resp);
            let exists = false
            for(let u of roomuser){
                if(u.roomname === this.state.roomname){
                    exists = true;
                    break;
                }
            } 
            if(!exists)
                this.state.roomname = this.state.owner.username + this.state.loggedUser.username
          });
    }


    redirectAd(ad){
        this.props.history.push(`/selectedAd/${ad.id}`)
        window.location.reload();
    }

    render() {
        let checkIfMyAd = false;
        if(this.state.loggedUser !== null && this.state.owner.id === this.state.loggedUser.id){
            checkIfMyAd =  true;
        }else{
            checkIfMyAd = false;
        }

        return (
            <div className="container columns mt-3">
                <div className="column">
                        <img src={process.env.PUBLIC_URL + '/images/' + this.state.urlPhoto} style={{width: "500px", height: "300px", display: "block", marginLeft: "auto", marginRight: "auto"}}></img>
                        <div className="col-lg-12 login-title mt-5">{this.state.name}</div><br/>

                        {!this.state.isEdit ? 
                        <div>
                            <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>Name</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{this.state.name}</label><br/>

                            <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>Description</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{this.state.description}</label><br/>

                            <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>Price</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{this.state.price}</label><br/>
                            
                            <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>City</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{this.state.city}</label><br/>

                            <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>Category</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{this.state.status}</label><br/>

                            {(checkIfMyAd === true && !UserService.isExpired()) ? 
                            <div className='mt-3'>
                                <button className='button is-info' onClick={this.openEditHandler.bind(this)}>Edit</button>
                                <button className='button is-danger ml-2' onClick={this.deleteAd.bind(this)}>Delete</button>
                            </div> : null}
                        </div> 
                        
                        :<div>                   
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
                            <label className="col-sm-4 col-form-label mt-2" htmlFor="name"><b>Category</b></label>
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
                                    <input className="file-input" value={this.state.urlPhotoHelper} onChange={this.changeUrlPhotoHandler} type="file" name="resume"/>
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
                                <button className='button is-primary' onClick={this.updateAd.bind(this)}>Save</button>
                                <button className='button is-light ml-3' onClick={this.cancelEditHandler.bind(this)}>Cancel</button>
                            </div> : null}
                        </div>
                        }

                        <br/><br/>
                   </div>   

                   <div className='column'>
                        <div className='ml-5' style={{width: "61%", borderWidth: "1px", borderStyle: "solid", borderColor: "turquoise", backgroundColor: "#FAFAFA", paddingLeft: "15px"}}>
                            <h4 className='is-center'>Information about seller</h4>

                            <label className="col-sm-4 col-form-label mt-2 mr-1" htmlFor="name"><b>Username</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{this.state.owner.username}</label><br/>

                            <label className="col-sm-4 col-form-label mt-2 mr-1" htmlFor="name"><b>First name</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{this.state.owner.firstName}</label><br/>

                            <label className="col-sm-4 col-form-label mt-2 mr-1" htmlFor="name"><b>Last name</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{this.state.owner.lastName}</label><br/>

                            <label className="col-sm-4 col-form-label mt-2 mr-1" htmlFor="name"><b>Phone number</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{this.state.owner.phoneNumber}</label><br/>

                            <label className="col-sm-4 col-form-label mt-2 mr-1" htmlFor="name"><b>Date of registration</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{Moment(this.state.owner.dateOfRegistrion).format('DD.MM.YYYY.')}</label><br/><br/>
                            <button className='button is-primary mb-3' onClick={this.message.bind(this)}>Message</button>
                        </div>
                        <br/><br/><br/><br/>

                        <div style={{ height: "250px", overflow: "auto", borderWidth: "1px", borderStyle: "solid", borderColor: "turquoise", backgroundColor: "#FAFAFA" }}>
                        <h4 className='is-center' style={{textAlign: "center"}}>More products by this seller</h4>
                            <table className='table is-striped is-narrow is-hoverable is-fullwidth mt-2'>
                                <tbody>
                                <tr>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                </tr>
                                {
                                this.state.adsByUser.map(item =>{
                                    return  <tr key={item.id}>
                                                <th style={{fontWeight: "normal"}}><a style={{color:"DarkCyan"}} onClick={() => {this.redirectAd(item)}}>{item.name}</a></th>
                                                <th style={{fontWeight: "normal"}}>{item.status}</th>
                                                <th style={{fontWeight: "normal"}}>{item.price}</th>
                                            </tr>})
                                }
                                </tbody>
                            </table>

                        </div>

                    </div>  
            </div>
        );
    }

    componentDidMount() {

        AdService.getAd(this.props.match.params.id).then((res)=>{
            this.setState({
                ad: res.data,
                name: res.data.name,
                description: res.data.description,
                price: res.data.price,
                city: res.data.city,
                status: res.data.status,
                owner: res.data.userApp,
                urlPhoto: res.data.urlPhoto,
            })

            AdService.getAdsByUser(res.data.userApp.id).then((res)=>{
                this.setState({
                    adsByUser: res.data
                })
            }).catch((err)=>{
                console.log(err)
            })
        })



    }

}


export default SelectedAd;