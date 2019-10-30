import React, { useState } from 'react';
import './index.scss';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button, Form } from 'reactstrap';
import Axios from 'axios';
import Input from '../../common/Input';
import useForm from '../../../utils/useForm';
import config from '../../../config';
import { showToastrOnSuccess, showToastrOnError } from '../../../utils/common';

const initialState = {
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
  ticket: {
    rules: [
      {
        test: 'required'
      },
      {
        test: 'number'
      }
    ]
  }
};

function fetchProfile(setState, data) {
  const baseUrl = config.baseUrl;
  const url = `${baseUrl}${config.ticketBookingList}${data.phoneNumber}/${
    data.ticket
  }`;
  Axios.get(url)
    .then(res => {
      setState(res.data.data);
      showToastrOnSuccess('Tickets fetch Successfully');
    })
    .catch(res => {
      if (res.response) showToastrOnError(res.response.data.status.message);
    });
}

export default () => {
  const { form, errors, validateForm, getData, setValues } = useForm(
    initialState
  );
  const [state, setState] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const valid = validateForm();
    const data = getData();
    if (valid) {
      fetchProfile(setState, data);
    }
  }
  return (
    <Grid>
      <Row>
        <div className="custheader">
          <h4>View / Print Ticket</h4>
          <p style={{ color: 'gray' }}>
            Verify your details, and{' '}
            <span style={{ color: '#da4d52' }}>Print</span> your tickets
          </p>
        </div>
        <Form onSubmit={handleSubmit}>
          <Col md={2} xs={12} />
          <Col md={4} xs={12}>
            <Input
              id="ticket"
              label="Ticket No"
              placeholder="Enter your ticket number"
              {...form.ticket.input}
              error={errors.ticket}
              required
            />
          </Col>
          <Col md={3} lg={3} xs={12}>
            <Input
              id="phoneNumber"
              label="Mobile"
              placeholder="Enter your Mobile number"
              {...form.phoneNumber.input}
              error={errors.phoneNumber}
              required
            />
          </Col>
          <Col md={3} lg={3} xs={12}>
            <Button
              bsStyle="primary"
              style={{ marginTop: 24 }}
              className="submitBtn"
            >
              Submit
            </Button>
          </Col>
        </Form>
      </Row>
      {state.length ? (
        <table className="table table-hover table-bordered table-striped">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Traveler Name</th>
              <th>Seat No.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {state.map((item, i) => (
              <tr key={item.seatId}>
                <td>{i + 1}</td>
                <td>{item.customerName}</td>
                <td>{item.gender}</td>
                <td>{item.travelName}</td>
                <td>{item.seatNumber}</td>
                <td>
                  <button className="btn btn-xs btn-danger">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ''
      )}
    </Grid>
  );
};
