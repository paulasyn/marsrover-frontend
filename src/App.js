// App.js

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">NASA Consumer</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
              </ul> 
            </div>
            
          </nav> <br/>
          <h2>Consume the NASA API!</h2> <br/>           
          <button variant="primary">Get Photos From Text File</button>

        </div>
      </Router>
    );
  }
}

export default App;
