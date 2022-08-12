import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css';
import swal from 'sweetalert2';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
        <Router>
              <Navbar />
                <div className="container">
                    <Routes> 
                          <Route path = "/" exact element = {<HomePage/>}></Route>
                          {/*<Route path = "/employees" component = {ListEmployeeComponent}></Route>*/}

                    </Routes>
                </div>
        </Router>
    </div>
  );
}

export default App;
