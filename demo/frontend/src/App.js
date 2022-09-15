import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/login.css'
import './CSS/messages.css'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import SelectedAd from './components/SelectedAd';
import AddNewAd from './components/AddNewAd';
import AllUsers from './components/AllUsers';
import createHistory from 'history/createBrowserHistory';

import firebase from 'firebase/compat/app';
import Messages from './components/Messages';
const firebaseConfig = {
  apiKey: "AIzaSyCGzjuszoNvcYF6klp2ly4szmT3c5pQsBo",
  authDomain: "mini-ads-app.firebaseapp.com",
  databaseURL: "https://mini-ads-app-default-rtdb.firebaseio.com",
  projectId: "mini-ads-app",
  storageBucket: "mini-ads-app.appspot.com",
  messagingSenderId: "622211083289",
  appId: "1:622211083289:web:3fb3a1944f1ebf867ece88",
  measurementId: "G-PXMPT336WR"
};
firebase.initializeApp(firebaseConfig);

const history = createHistory();  

function App() {
  return (
    <div>
        <Router history={history}>
              <Navbar />
                <div className="container">
                    <Switch>
                          <Route path = "/" exact component = {HomePage}></Route>
                          <Route path = "/login" component = {Login}></Route>
                          <Route path = "/register" component = {Register}></Route>
                          <Route path = "/selectedAd/:id" component = {SelectedAd}></Route>
                          <Route path = "/addNewAd" component = {AddNewAd}></Route>
                          <Route path = "/allUsers" component = {AllUsers}></Route>
                          <Route path = "/messages" component = {Messages}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
  );
}

export default App;
