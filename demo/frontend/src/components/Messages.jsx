import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import Moment from 'moment';
import UserService from '../services/UserService';


export const snapshotToArray = (snapshot) => {
    const returnArr = [];
  
    snapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
  
    return returnArr;
  };

class Messages extends Component {
    scrolltop = 0;

    constructor(props) {
        super(props)

        this.state = {
            loggedUser: JSON.parse(localStorage.getItem('user')),
            username : '',
            roomname : '',
            message : '',
            users : [],
            chats : [],
        }

        if(this.state.loggedUser === null){
            this.props.history.push(`/`)
            window.location.reload();
        }

        this.state.username = this.state.loggedUser.username;
        this.state.roomname = window.location.pathname.split('/')[2];


        this.changeMessageHandler = this.changeMessageHandler.bind(this);
    }
    
    changeMessageHandler(e) {
        this.setState({message: e.target.value});
    }

    onFormSubmit(e) {
        e.preventDefault()
        if(this.state.message != null && this.state.message != ""){
          const chat = {};
          chat.roomname = this.state.roomname;
          chat.username = this.state.username;
          chat.message = this.state.message;
          chat.date = Moment(new Date()).format('DD.MM.YYYY. HH:mm:ss.SSS');
          chat.type = 'message';
          const newMessage = firebase.database().ref('chats/').push();
          newMessage.set(chat);
        }
      }

    render() {
        return (
            <div>
                <h1 className='mt-3' style={{textAlign:"center"}}>Messaging</h1>
                <div className="mt-1 columns">
                    <div className="column is-one-fifth chat-window">
                        <div className=" mt-5 ">
                        {                                
                        this.state.users.map(item =>{
                        return  <div className="card mt-3" key={item.username} style={{"borderWidth": "1px", "borderStyle": "solid", "borderColor": "turquoise", "backgroundColor": "#FAFAFA"}}>
                                    <span className="username"><i className="bi bi-person-circle"></i> {item.username}</span><br/><br/>
                                </div>
                        })}
                        </div>
                    </div>
                    <div className="column is-four-fifth" style={{overflow: "hidden", height:"90%"}}>
                        <div className="chat-content" style={{paddingBottom: "10%"}}>

                        {                                
                        this.state.chats.map(item =>{
                        return   <div className="message-box" key={item.date}>
                                    <div className="chat-message">
                                        <div>
                                            {(item.username === this.state.username) ?
                                            <div className='right-bubble'> 
                                                <span className="msg-name">Me</span>
                                                <span className="msg-date"> at {item.date}</span>
                                                <p>{item.message}</p>
                                            </div>:
                                            <div className='left-bubble'> 
                                                <span className="msg-name left-bubble">{item.username}</span>
                                                <span className="msg-date"> at {item.date}</span>
                                                <p>{item.message}</p>
                                            </div>
                                            }
                                            
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                        })}

                        </div>
                        <footer className="sticky-footer">
                            <form className="message-form"  onSubmit={this.onFormSubmit.bind(this)}>
                                <div className="message-form-field" style={{display: "flex", justifyContent: "center"}}>
                                    <input className="input is-primary" style={{"width":"30%" }} placeholder="Enter message here" value={this.state.message} onChange={this.changeMessageHandler}/>
                                    <button type="submit" className='button is-info is-rounded ml-3' aria-label="Send"><i className="bi bi-envelope mr-2"></i>Send</button>
                                </div>
                            </form>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount(){
        firebase.database().ref('chats/').on('value', (resp) => {
            this.setState({
                chats: snapshotToArray(resp).filter(x => x.roomname === this.state.roomname)
            })
        });

        firebase.database().ref('roomusers/').orderByChild('roomname').equalTo(this.state.roomname).on('value', (resp2) => {
            this.setState({
                users: snapshotToArray(resp2),
                users: snapshotToArray(resp2)
            })
        });

        if(UserService.isExpired()){
            this.props.history.push(`/`)
            window.location.reload();
        }
    }
}




export default Messages;