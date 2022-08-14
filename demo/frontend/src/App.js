import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/login.css'


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>
        <Router>
              <Navbar />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {HomePage}></Route>
                          <Route path = "/login" component = {Login}></Route>
                          <Route path = "/register" component = {Register}></Route>

                    </Switch>
                </div>
        </Router>
    </div>
  );
}

export default App;
