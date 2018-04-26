import React, { Component } from 'react';
import { Field,reduxForm } from 'redux-form';
import {login, register, fetchData} from '../actions/index';
import { connect } from 'react-redux';

class Register extends Component {
  constructor(props){
    super(props);
    this.error = '';
  }
  handleFormSubmit(formProps){
    this.error = '';
    this.props.register(formProps);
    const reg = this;
    setTimeout(function(){
      if(reg.props.errorMessage){
        reg.error = reg.props.errorMessage;
        reg.props.history.push("/register");
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
    const { handleSubmit } = this.props;
    return(
      <div className="container">
      <div style={{"color": "red"}}>{this.error ? this.error: ""}</div>
        <form className="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="text-center"><h3>Register</h3></div>
          <Field  name="username" label="Username" component={this.renderField}/>
          <Field  name="password" label="Password" component={this.renderFieldPassword}/>
          <Field  name="passwordConfirm" label="Confirm Password" component={this.renderFieldPassword}/>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

function validate(formProps){
  const errors = {};
  if(!formProps.username){
    errors.username = "Please enter a valid username";
  }
  if(!formProps.password){
    errors.password = "Please enter a password";
  }
  if(!formProps.passwordConfirm || formProps.passwordConfirm !== formProps.password){
    errors.passwordConfirm = "The passwords does not match";
  }
  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error,authenticated: state.auth.authenticated };
}

export default reduxForm({
  form: 'register',
  validate
})(connect(mapStateToProps,{login, register, fetchData})(Register));
