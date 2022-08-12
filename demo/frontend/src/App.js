import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css';
import swal from 'sweetalert2';
import './CSS/login.css'
import { useHistory } from "react-router-dom";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <div>
        <Router>
              <Navbar />
                <div className="container">
                    <Routes> 
                          <Route path = "/" exact element = {<HomePage/>}></Route>
                          <Route path = "/login" element = {<Login/>}></Route>

                    </Routes>
                </div>
        </Router>
    </div>
  );
}

export default App;
