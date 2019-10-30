import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.scss';

export default class TravellerForm extends Component {
  render() {
    return (
      <div className="travellerFormContainer">
        <div className="travellerFormHeading">
          Traveller {this.props.index + 1}
        </div>
        <Row className="travellerFormContent">
          <Col md={4} lg={4} xs={4}>
            <input placeholder="First Name" className="form-control input-sm" />
          </Col>
          <Col md={3} lg={3} xs={3}>
            <input placeholder="Last Name" className="form-control input-sm" />
          </Col>
          <Col md={3} lg={3} xs={3}>
            <input
              type="number"
              placeholder="Age"
              className="form-control input-sm"
            />
          </Col>
          <Col md={2} lg={2} xs={2}>
            <select name="" className="form-control input-sm" id="sel1">
              <option value="">Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="T">Transgender</option>
            </select>
          </Col>
        </Row>
      </div>
    );
  }
}
