import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./index.scss";
import Axios from 'axios';
import { showToastrOnSuccess,showToastrOnError } from '../../../utils/common';
import PropTypes from 'prop-types';
import config from '../../../config.js';

export default class Resetpassword extends Component {

  state = {
    oldpassword:'',
    password: '',
    confirmPassword: ''
  }
  validateForm = ()=> {
    return this.state.password.length > 0 && this.state.confirmPassword.length > 0 && this.state.oldpassword.length>0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    const resetPasswordUrl = `${config.baseUrl}${config.resetPassword}/1?newPassword=${this.state.password}&oldPassword=${this.state.oldpassword}`;
    Axios.put(resetPasswordUrl)
      .then(res => {
        if(res.data.data == 1){
          showToastrOnSuccess('Password change Successfully');
      }
      }).catch(res => {
        if(res.response)
          showToastrOnError(res.response.data.status.message)
      });
  }
  render() {
    console.log('stateL ',this.state)
    return (
      <div className="forgot">
        <div className="forgot-form">
           <div className="main-heading">
              <h3>Change Password</h3>
              <h6 className="heading">You can reset your password here.</h6>
            </div>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="password">
              <ControlLabel>Old Password</ControlLabel>
              <FormControl
                value={this.state.oldpassword}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <FormGroup controlId="password">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <FormGroup controlId="confirmPassword">
              <ControlLabel>Confirm Password</ControlLabel>
              <FormControl
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              bsStyle="primary"
              disabled={!this.validateForm()}
              type="submit"
            >
              Reset Password
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

Resetpassword.contextTypes = {
  router: PropTypes.object
};