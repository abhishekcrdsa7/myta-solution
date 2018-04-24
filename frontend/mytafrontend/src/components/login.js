import React, { Component } from 'react';

class Login extends Component {
  render(){
    return(
      <div className="container">
        <form className="form" method="POST" action="http://localhost:3001/login">
          <div className="text-center"><h3>Login</h3></div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" name="username" placeholder="Username"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword1">Password</label>
            <input type="password" className="form-control" id="inputPassword1" name="password" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
