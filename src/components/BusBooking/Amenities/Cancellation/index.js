import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.scss';

export default ({ cancellationPolicy }) => (
  <div className="rowBox">
    <Row className="am_header">
      <Col md={6} lg={6} xs={6}>
        Hours before Departure
      </Col>
      <Col md={6} lg={6} xs={6}>
        Refund Percentage
      </Col>
    </Row>
    {cancellationPolicy.length ? (
      cancellationPolicy.map(item => (
        <Row key={item.ruleId} className="am_headerv">
          <Col md={6} lg={6} xs={6} className="am_headerv_cal">
            {item.departureHeading}
          </Col>
          <Col md={6} lg={6} xs={6}>
            {item.policyHeading}
          </Col>
        </Row>
      ))
    ) : (
      <div className="text-center">No cancellation Policy</div>
    )}
  </div>
);
