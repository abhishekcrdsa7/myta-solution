import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/index';



class Navbar extends Component {
  logoutUser(e){
    this.props.logoutUser();
    this.props.history.push("/");
  }

  render(){
    let lis = [];
    if(localStorage.getItem("token")){
      lis = [

        <div className="btn-group content" key={0}>
            <Link id="dLabel" role="button" data-toggle="dropdown" className="nav-link dropdown-toggle" to="">
              Contents
            </Link>
              <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                <li className="dropdown-submenu">
                  <Link className="dropdown-item grade" tabIndex="-1" to="#">
                  Grade 11
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="dropdown-submenu">
                    <Link className="dropdown-item sub" to="#">
                    Science
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item chap" to="/elechrg">Electric Charge</Link></li>
                    </ul>
                </li>
                <li className="dropdown-submenu">
                  <Link className="dropdown-item sub" to="#">
                  Mathematics
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item chap" to="/eqnofln">Equation of Line</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="dropdown-submenu">
              <Link className="dropdown-item grade" tabIndex="-1" to="#">
              Grade 12
              </Link>
              <ul className="dropdown-menu">
                <li className="dropdown-submenu">
                  <Link className="dropdown-item sub" to="#">
                  Social Studies
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item chap" to="/rlsofusa">Rulers Of USA</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>,
      <li className="nav-item" key={1}>
      <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
    </li>,
      <li className="nav-item nav-link" key={2} onClick={this.logoutUser.bind(this)} id="logout">Logout</li>
      ];
    }else{
        lis=[
          <li className="nav-item" key={0}>
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>,
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/login">Log in</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/register">Register</Link>
        </li>
      ];
    }
    return(
      <nav className="navbar navbar-light navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}}>
        <Link className="navbar-brand" to="#">MYTA</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
          <ul className="navbar-nav mt-2 mt-lg-0">
            {lis}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state){
  return{authenticated: state.auth.authenticated}
}
export default connect(mapStateToProps,{ logoutUser })(Navbar);
