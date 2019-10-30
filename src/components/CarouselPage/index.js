import React from 'react';
import { Link } from "react-router-dom";
import './index.scss';
import Carousel from 'react-bootstrap/lib/Carousel';

export default () => (
  <Carousel className="custom-slide">
    <Carousel.Item>
      <img className="img-responsive" alt="900x500" src="./assets/img/2.jpg" />
      <Carousel.Caption>
        <h3>Online Bus Tikcet Booking</h3>
        <p>Digital Bihar is fastest growing application</p>
        <Link to="/bus-booking" className="btn btn-danger btn-lg">Book Bus Ticket</Link>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="img-responsive" alt="900x500" src="./assets/img/4.jpg" />
      <Carousel.Caption>
        <h3>Travel without worry</h3>
        <p>
          Insure every journey with Digital Bihar. Get alternate bus
          arrangements in an unlikely event of bus cancellation else get double
          of your bus booking amount refunded.
        </p>
        <Link to="/bus-booking" className="btn btn-danger btn-lg">Book Bus Ticket</Link>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="img-responsive" alt="900x500" src="./assets/img/3.jpg" />
      <Carousel.Caption>
        <h3>Hassle-free bus booking from anywhere & anytime</h3>
        <p>Wide choice of bus seats, bus types & operators.</p>
        <Link to="/bus-booking" className="btn btn-danger btn-lg">Book Bus Ticket</Link>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
