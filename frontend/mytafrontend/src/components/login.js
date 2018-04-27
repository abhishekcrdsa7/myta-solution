import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {login} from '../actions/index';
import { connect } from 'react-redux';

class Login extends Component {

  constructor(props){
    super(props);
    this.error = '';
  }
  handleFormSubmit(formProps){
    this.error = '';
    this.props.login(formProps);
    const reg = this;
    setTimeout(function(){
      if(reg.props.errorMessage){
        reg.error = reg.props.errorMessage;
        reg.props.history.push("/login");
      }
      if(reg.props.authenticated){
        reg.props.history.push("/");
      }
    },1000);
  }

  renderField(field){
    return(
      <div>
        <div className="form-group">
          <label>{field.label}</label>
          <input type="text" className="form-control" {...field.input} placeholder={field.label}/>
        </div>
        <div style={{"color":"red"}}>
          {field.meta.touched ? field.meta.error : ''}
        </div>
     </div>
    );
  }

  renderFieldPassword(field){
    return(
      <div>
        <div className="form-group">
          <label>{field.label}</label>
        <input type="password" className="form-control" {...field.input} placeholder={field.label}/>
        </div>
        <div style={{"color":"red"}}>
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  render(){
    const {handleSubmit} = this.props;
    return(
      <div className="logreForm">
      <div style={{"color": "red"}}>{this.error ? this.error: ""}</div>
        <div className="form-pad">
          <form className="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
              <div className="text-center"><h3>Login</h3></div>
              <Field  name="username" label="Username" component={this.renderField}/>
              <Field  name="password" label="Password" component={this.renderFieldPassword}/>
              <button action="submit" className="btn btn-primary">Log in</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {errorMessage: state.auth.error, authenticated: state.auth.authenticated};
}

function validate(formProps){
  const errors = {};
  if(!formProps.username){
    errors.username = "Please enter a valid username";
  }
  if(!formProps.password){
    errors.password = "Please enter a password";
  }
  return errors;
}

export default reduxForm({
  form: "login",
  validate
})(connect(mapStateToProps,{login})(Login));
