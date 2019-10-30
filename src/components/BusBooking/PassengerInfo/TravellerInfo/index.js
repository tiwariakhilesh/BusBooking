import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.scss';

function formatDate(date) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var d = new Date(date),
    month = d.getMonth(),
    day = d.getDate(),
    weekDay = d.getDay();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return `${dayNames[weekDay]}, ${day} ${monthNames[month]}`;
}

export default ({
  busDetails: {
    travelsName,
    source,
    destination,
    departureDate,
    arrivalDate,
    busType,
    fares,
    cancellationPolicy,
    droppingLocations,
    boardingLocations,
    arrivalTime,
    departureTime,
    ...rest
  },
  selectedBoardingPoint,
  selectedDroppingPoint
}) => {
  console.log('ddd', rest);

  const formatedDepartureDate = formatDate(departureDate);
  const formatedArrivalDate = formatDate(arrivalDate);
  return (
    <div className="passenger-info">
      <div className="banner">
        <span className="bannerheader">01</span>
        Review Itinerary
      </div>
      <div className="passengercontaint">
        <Row>
          <Col md={3} lg={3} xs={6} sm={6}>
            <div
              style={{
                width: '100px',
                height: '80px',
                background: '#e9edee',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
                border: '0.5px solid gray'
              }}
            >
              <div
                style={{
                  borderBottom: '0.5px solid gray',
                  textAlign: 'center',
                  background: 'yellow',
                  borderTopLeftRadius: '20px',
                  borderTopRightRadius: '20px'
                }}
              >
                onword
              </div>
              <div style={{ marginTop: '20px', textAlign: 'center' }}>11KM</div>
            </div>
          </Col>
          <Col md={3} lg={3} xs={6} sm={6}>
            <div style={{ fontWeight: '600' }}>
              <span style={{ fontWeight: '700', fontSize: '1.8rem' }}>
                {departureTime}
              </span>
              <span> {source}</span>
            </div>
            <div
              style={{
                color: '#909090',
                fontSize: '1.1rem',
                marginBottom: '5px'
              }}
            >
              {formatedDepartureDate}
            </div>
            <div
              style={{
                fontSize: '1rem',
                color: '#4a4a4a',
                textTransform: 'capitalize'
              }}
            >
              <span style={{ fontWeight: '700' }}>
                {selectedBoardingPoint.value}
              </span>
            </div>
          </Col>
          <Col md={3} lg={3} xs={6} sm={6}>
            <div style={{ fontWeight: '600' }}>
              <span style={{ fontWeight: '700', fontSize: '1.8rem' }}>
                {arrivalTime}
              </span>
              <span> {destination}</span>
            </div>
            <div
              style={{
                color: '#909090',
                fontSize: '1.1rem',
                marginBottom: '5px'
              }}
            >
              {formatedArrivalDate}
            </div>
            <div
              style={{
                fontSize: '1rem',
                color: '#4a4a4a',
                textTransform: 'capitalize'
              }}
            >
              <span style={{ fontWeight: '700' }}>
                {selectedDroppingPoint.value}
              </span>
            </div>
          </Col>
          <Col md={3} lg={3} xs={6} sm={6}>
            <div
              style={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                fontSize: '1.8rem',
                color: '#4a4a4a',
                textTransform: 'capitalize'
              }}
            >
              {travelsName}
            </div>
            <div
              style={{
                opacity: '.4',
                fontWeight: '600',
                color: '#4d4d4d',
                marginBottom: '5px'
              }}
            >
              {busType}
            </div>
            <div style={{ fontSize: '1.2rem' }}>Seats:M,F</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
