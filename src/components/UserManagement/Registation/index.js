import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './index.scss';
import { Grid, Row, Col } from 'react-bootstrap';
import useForm from '../../../utils/useForm';
import Input from '../../common/Input';
import config from '../../../config';
import { showToastrOnSuccess,showToastrOnError } from '../../../utils/common';

const initialState = {
  email: {
    rules: [
      {
        test: 'required'
      },
      {
        test: 'email'
      }
    ]
  },
  name: {
    rules: [
      {
        test: 'required'
      }
    ]
  },
  address: {
    rules: [
      {
        test: 'required'
      }
    ]
  },
  phoneNumber: {
    rules: [
      {
        test: 'required'
      },
      {
        test: 'number'
      },
      {
        test: 'max',
        max: 10
      }
    ]
  },
  aadharNumber: {
    rules: [
      {
        test: 'required'
      },
      {
        test: 'number'
      }
    ]
  },
  panNumber: {
    rules: [
      {
        test: 'required'
      },
      {
        test: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
      }
    ]
  },
  city: {
    rules: [
      {
        test: 'required'
      }
    ]
  },
  state: {
    rules: [
      {
        test: 'required'
      }
    ]
  },
  password: {
    rules: [
      {
        test: 'required'
      },
      {
        test: 'min',
        min: 6
      }
    ]
  },
  cnfPassword: {
    rules: [
      {
        test: 'required'
      },
      {
        test: 'compare',
        compare: 'password'
      }
    ]
  }
};

function postProfile(body, history) {
  const baseUrl = config.baseUrl;
  const url = `${baseUrl}${config.createProfile}`;
  Axios.post(url, body)
    .then(res => {
      const {
        address,
        city,
        email,
        name,
        panNumber,
        aadharNumber,
        phoneNumber,
        state
      } = res.data.data;
      showToastrOnSuccess('Profile Created Successfully');
      history.push('/login');
    }).catch(res => {
      if(res.response)
        showToastrOnError(res.response.data.status.message)
    });
}

const RegisterPage = ({ history }) => {
  const { form, errors, validateForm, getData, setValues } = useForm(
    initialState
  );
  function handleSubmit(e) {
    e.preventDefault();
    const valid = validateForm();
    const data = getData();
    if (valid) {
      postProfile(data, history);
    }
  }
  return (
    <Grid className="signContainer">
      <h3 style={{ textAlign: 'center' }}>Register user</h3>
      <form name="form" className="signform" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <Input
              required
              id="name"
              label="Name"
              {...form.name.input}
              error={errors.name}
            />
          </div>
          <div className="col-sm-6">
            <Input
              required
              id="email"
              label="Email"
              {...form.email.input}
              error={errors.email}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Input
              required
              id="password"
              label="Password"
              {...form.password.input}
              error={errors.password}
            />
          </div>
          <div className="col-sm-6">
            <Input
              required
              id="cnfPassword"
              label="Confirm Password"
              {...form.cnfPassword.input}
              error={errors.cnfPassword}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Input
              required
              id="address"
              label="Address"
              {...form.address.input}
              error={errors.address}
            />
          </div>
          <div className="col-sm-6">
            <Input
              required
              id="phoneNumber"
              label="Phone Number"
              {...form.phoneNumber.input}
              error={errors.phoneNumber}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Input
              required
              id="panNumber"
              label="Pan Number"
              {...form.panNumber.input}
              error={errors.panNumber}
            />
          </div>
          <div className="col-sm-6">
            <Input
              required
              id="aadharNumber"
              label="Aadhar Number"
              {...form.aadharNumber.input}
              error={errors.aadharNumber}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Input
              required
              id="city"
              label="City"
              {...form.city.input}
              error={errors.city}
            />
          </div>
          <div className="col-sm-6">
            <Input
              required
              id="state"
              label="State"
              {...form.state.input}
              error={errors.state}
            />
          </div>
        </div>
        <button disabled={!form.dirty} className="btn btn-primary">
          Submit
        </button>
      </form>
    </Grid>
  );
};

export default RegisterPage;
