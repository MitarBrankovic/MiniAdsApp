import React, { Component } from 'react';
import AdService from '../services/AdService';
import Moment from 'moment';
import Swal from 'sweetalert2';
import UserService from '../services/UserService';
import BiddingService from '../services/BiddingService';
import Modal from 'react-bootstrap/Modal';
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
            biddingPrice: '',
            highestBid: 0,
            show: false,
            allBidsByAd: [],

            adsByUser: [],
            urlPhotoHelper: '',
            roomname: '',

            time: {},
            seconds: 1,
            timer: 0,

            
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeUrlPhotoHandler = this.changeUrlPhotoHandler.bind(this);
        this.changeBiddingPriceHandler = this.changeBiddingPriceHandler.bind(this);
        this.openModalHandler = this.openModalHandler.bind(this);
        this.closeModalHandler = this.closeModalHandler.bind(this);

        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    openModalHandler(e) {
        this.setState({show: true});
    }

    closeModalHandler(e) {
        this.setState({show: false});
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

    changeBiddingPriceHandler(e) {
        this.setState({biddingPrice: e.target.value});
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
                        'Your ad has been deleted.',
                        'success'
                      )
                    this.props.history.push('/');
                }).catch(err=>{
                    console.log(err);
                })
            }
          })
    }

    message(){

        this.checkRoomname()

        firebase.database().ref('roomusers/').orderByChild('roomname').on('value', (resp) => {
            
            let roomuser = [];
            roomuser = snapshotToArray(resp);
            const user = roomuser.find(x => x.roomname === this.state.roomname && x.username === this.state.loggedUser.username);
            if (user !== undefined) {
              const userRef = firebase.database().ref('roomusers/' + user.key);
              userRef.update({status: 'online'});
            } else {
              const firstUser = { roomname: '', username: '', status: '' };
              firstUser.roomname = this.state.roomname;
              firstUser.username = this.state.loggedUser.username;
              firstUser.status = 'online';
              const newRoomUser = firebase.database().ref('roomusers/').push();
              newRoomUser.set(firstUser);

              const secondUser = { roomname: '', username: '', status: '' };
              secondUser.roomname = this.state.roomname;
              secondUser.username = this.state.owner.username;
              secondUser.status = 'offline';
              const newRoomUser2 = firebase.database().ref('roomusers/').push();
              newRoomUser2.set(secondUser);
            }
            this.redirectMessages(this.state.roomname)
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

    notification(){
        const newNotification = { ownerUsername: '', adName:'', biddingPrice: '', type: '', date: '', username: '' };
        newNotification.ownerUsername = this.state.owner.username;
        newNotification.adName = this.state.ad.name;
        newNotification.biddingPrice = this.state.biddingPrice;
        newNotification.type = 'bidding';
        newNotification.date = new Date().toLocaleString();
        newNotification.username = this.state.loggedUser.username;
        const addNewNotif = firebase.database().ref('notifications/').push();
        addNewNotif.set(newNotification);
        setTimeout(function(){window.location.reload()}, 300);
    }

    bid(){
        if(!!this.state.biddingPrice && this.state.biddingPrice >= this.state.highestBid + 10){
            let dto = {
                username: this.state.loggedUser.username,
                currentPrice: this.state.biddingPrice,
                adId: this.state.ad.id
            }
            
            BiddingService.bid(dto).then(()=>{
                UserService.swalSuccess('Bid successfully placed!')
                this.notification();
            }).catch(err=>{
                UserService.swalError('Your bid has not been placed.')
            })
        }
    }

    //#########################################TAJMER#############################################

    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
      }
    
    
      startTimer() {
        if (this.state.timer == 0 && this.state.seconds > 0) {
          this.state.timer = setInterval(this.countDown, 1000);
        }
      }
    
      countDown() {
        let seconds = this.state.seconds - 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });

        if (seconds == 0) { 
            //ovde kad istekne
          clearInterval(this.state.timer);
        }
      }
    
    //############################################################################################

    redirectMessages(roomname){
        this.props.history.push(`/messages/${roomname}`)
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

                            {(checkIfMyAd && !UserService.isExpired()) ? 
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
                                        Choose a file???
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

                        <div>
                            <label className="col-sm-4 col-form-label mt-2 mr-1" htmlFor="currentBid"><b>Current bid</b></label>
                            <label className="col-sm-4 col-form-label mt-2">{this.state.highestBid} RSD</label> <br/>    
                            <input placeholder='Enter your bid here' pattern="[0-9]+" title="Enter numbers only." className="input is-primary" style={{"width":"40%" }} type="number" value={this.state.biddingPrice} onChange={this.changeBiddingPriceHandler} required/>
                            <button disabled={(!checkIfMyAd && !UserService.isExpired()) ? false : true} className='button is-primary ml-3' onClick={()=> this.bid()}>Bid</button> <br/>
                            <label style={{fontStyle: "italic", fontSize:"12px"}}>minimum {this.state.highestBid + 10} RSD</label> <br/>
                            <a style={{color:"DarkTurquoise", fontStyle:"italic"}} onClick={this.openModalHandler}>Show({this.state.allBidsByAd.length})</a>

                            {
                                this.state.seconds > 1 ? <label className='ml-5' style={{fontSize:"14px"}}>Remaining: <b>{this.state.time.h}h {this.state.time.m}m {this.state.time.s}s</b></label> : null
                            }
                            
                        </div><br/>

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
                            {(!checkIfMyAd && !UserService.isExpired()) ? 
                                <button className='button is-primary mb-3' onClick={this.message.bind(this)}><i className="bi bi-envelope mr-2"></i>Message</button> : null
                            }
                        </div>
                        <br/><br/><br/><br/>

                        <div className='tableScroll' style={{ height: "250px", overflow: "auto", borderWidth: "1px", borderStyle: "solid", borderColor: "turquoise", backgroundColor: "#FAFAFA" }}>
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



                    <Modal show={this.state.show} onHide={this.closeModalHandler}>
                        <Modal.Header closeButton>
                        <Modal.Title>Last bids</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                                <div className="card mt-5">
                                {
                                this.state.allBidsByAd.map(item =>{
                                    return <div className="card-content" key={item.id} style={{borderBottom: "1px solid"}}>
                                        <div className="content">
                                            <label >{item.username}</label><br/>
                                            <span style={{fontStyle: "italic", fontSize:"12px"}}> at {Moment(item.dateOfCreation).format('DD.MM.YYYY. HH:mm')}</span>
                                            <label style={{float:"right"}}>{item.currentPrice} RSD</label>
                                        </div>
                                    </div>})
                                }                            
                                </div>                         
                        </Modal.Body>
                    </Modal>
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

            BiddingService.getHighestBidByAdId(res.data.id).then((res)=>{
                this.setState({
                    highestBid: res.data.currentPrice
                })
            }).catch((err)=>{
                this.setState({
                    highestBid: 0
                })
            })

            BiddingService.getAllBidsByAdId(res.data.id).then((res)=>{
                this.setState({
                    allBidsByAd: res.data
                })

                //find the earliest date of all bids
                let earliestDate = new Date().getTime() + 1000*60*60*24*365;
                res.data.forEach(element => {
                    let currentDate = new Date(element.dateOfCreation[0], element.dateOfCreation[1] - 1, element.dateOfCreation[2], element.dateOfCreation[3], element.dateOfCreation[4]).getTime();
                    if(currentDate < earliestDate){
                        earliestDate = currentDate;
                    }
                });

                //set seconds on timer from first bid
                if(res.data.length > 0){
                    let firstDate = new Date(earliestDate)
                    firstDate.setDate(firstDate.getDate() + 3);
                    const dateNow = new Date();
                    var seconds = (firstDate.getTime() - dateNow.getTime()) / 1000;
                    if(seconds > 0){    // ako nije istekao rok licitacije(prva licitacija je starija od 3 dana - istekla je)
                        let timeLeftVar = this.secondsToTime(seconds);
                        this.setState({ time: timeLeftVar, seconds: seconds });
                    }
                }
            }).catch((err)=>{
                this.setState({
                    allBidsByAd: []
                })
            })

        })

        this.startTimer();
        
        if (UserService.deleteLocalStorageIfExpired()){
            setTimeout(function(){window.location.reload()}, 1000);
        }
    }

}


export default SelectedAd;