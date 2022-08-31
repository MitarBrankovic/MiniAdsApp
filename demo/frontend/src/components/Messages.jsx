import React, { Component } from 'react';
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

class Messages extends Component {
    //@ViewChild('chatcontent') ElementRef chatcontent = new ElementRef({});
    scrolltop = 0;
    chatForm = new FormGroup({});
    username = '';
    roomname = '';
    message = '';
    users = [];
    chats = [];

    constructor(props) {
        super(props)

        this.state = {
            loggedUser: JSON.parse(localStorage.getItem('user')),
        }

        this.username = this.state.loggedUser.username;
        this.roomname = this.router.url.split('/')[2];  //ako je link/21312
        firebase.database().ref('chats/').on('value', (resp) => {
          this.chats = [];
          this.chats = snapshotToArray(resp).filter(x => x.roomname === this.roomname);;
          setTimeout(() => this.scrolltop = this.chatcontent.nativeElement.scrollHeight, 500);
        });
        firebase.database().ref('roomusers/').orderByChild('roomname').equalTo(this.roomname).on('value', (resp2) => {
          const roomusers = snapshotToArray(resp2);
          this.users = roomusers;
        });
    }

    onFormSubmit(form) {
        if(form.message != null && form.message != ""){
          const chat = form;
          chat.roomname = this.state.roomname;
          chat.username = this.state.nickname;
          chat.date = this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss');
          chat.type = 'message';
          const newMessage = firebase.database().ref('chats/').push();
          newMessage.set(chat);
          this.chatForm = this.formBuilder.group({
            'message' : [null, Validators.required]
          });
    
          //this.createNotification(`${this.nickname}: ${form.message}`, 2);
        }
      }

    render() {
        return (
            <div>
                
            </div>
        );
    }

    componentDidMount(){
        this.chatForm = this.formBuilder.group({
            'message' : [null, Validators.required]
          });
    }
}

export default Messages;