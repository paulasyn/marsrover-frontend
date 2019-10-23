// App.js

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import axios from 'axios';
class App extends Component {
  
  handleClick(e){
    console.log('The link was clicked.');
    axios.get('http://localhost:8080/getURLsFromFiles')
    .then(response => {
      this.setState({ responseBody: response.data.message });
    })
    .catch(error => {
      console.log(error);
    });  
  }

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
          <button onClick={ this.handleClick } variant="primary">Get Photos From Text File</button>
  
        </div>
      </Router>
     
      

    );
  }
}

export default App;
