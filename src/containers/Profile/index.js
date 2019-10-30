import React, { useEffect } from 'react';
import Axios from 'axios';
import useForm from '../../utils/useForm';
import Input from '../../components/common/Input';
import config from '../../config';
import { showToastrOnSuccess,showToastrOnError } from "../../utils/common";
import './style.scss';

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
  }
};

function fetchProfile(setValues, userId) {
  const baseUrl = config.baseUrl;
  const url = `${baseUrl}${config.profileByUserId}${userId}`;
  Axios.get(url)
    .then(res => {
      const {
        address,
        city,
        email,
        name,
        panNumber,
        phoneNumber,
        aadharNumber,
        state
      } = res.data.data;
      setValues({
        address,
        city,
        email,
        name,
        panNumber,
        phoneNumber,
        aadharNumber,
        state
      });
    }).catch(res => {
      if(res.response)
        showToastrOnError(res.response.data.status.message)
    });
}

function postProfile(setValues, userId, body) {
  const baseUrl = config.baseUrl;
  const url = `${baseUrl}${config.updateProfile}${userId}`;
  Axios.put(url, {...body, userId})
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
      //  setValues(body);
      showToastrOnSuccess('Profile Updated Successfully')
    }).catch(res => {
      if(res.response)
        showToastrOnError(res.response.data.status.message)
    });
}

function index({ history }) {
  const { form, errors, validateForm, getData, setValues } = useForm(
    initialState
  );
  const { userId } = JSON.parse(localStorage.getItem('loginData')) || {};

  useEffect(() => {
    if (userId) {
      fetchProfile(setValues, userId);
    } else {
      history.replace('/login');
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const valid = validateForm();
    const data = getData();
    if (valid) {
      postProfile(setValues, userId, data);
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="custheader">
          <h4>Profile</h4>
          <p style={{ color: 'gray' }}>
            View and Edit your
            <span style={{ color: '#da4d52' }}> Profile</span>
          </p>
        </div>
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
              disabled={true}
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
              disabled={true}
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
        <button disabled={!form.dirty} className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default index;
