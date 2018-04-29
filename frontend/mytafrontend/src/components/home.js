import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
    if(localStorage.getItem('token')){
      return(
        <div id="lgdin">
          <div id="lgdcont">
            <h3 id="lgdhead">Please use the navigation bar to access the content section.</h3>
          </div>
        </div>
      );
    }else{
      return(
        <div id="login">
          <div id="hmcont">
            <h3 id="hmhead">You can learn everything.</h3>
            <div id="homeBtn">
              <Link className="btn btn-primary hmbtn" id="hmlogin" to="/login">Login</Link>
              <Link className="btn btn-primary hmbtn" id="hmreg" to="/register">Register</Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Home;
