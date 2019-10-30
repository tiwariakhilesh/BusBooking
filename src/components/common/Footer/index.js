import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Grid, Row, Col, Nav, NavItem } from 'react-bootstrap';

const handleRoute = (history, route) => e => {
  e.preventDefault();
  history.push(route);
};

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { year: new Date().getFullYear() };
  }


  render() {
    const { history } = this.props;
    return (
      <footer className="myfooter">
        <Grid>
          <Row>
            <Col xs={12} sm={3} md={3} lg={3}>
              <h4 className="heading">Discover</h4>
              <Nav className="list-unstyled">
                <NavItem onClick={handleRoute(history, "/about")}>About Us</NavItem>
                <NavItem onClick={handleRoute(history, "/careers")}>Career</NavItem>
                <NavItem onClick={handleRoute(history, "/contact-us")}>Contact Us</NavItem>
                <NavItem onClick={handleRoute(history, "/user-agreement")}>User Agreement</NavItem>
                <NavItem onClick={handleRoute(history, "/via-gst-details")}>Via GST Details</NavItem>
              </Nav>
            </Col>
            <Col xs={12} sm={3} md={3} lg={3}>
              <h4 className="heading">Product Services</h4>
              <Nav className="list-unstyled">
                <NavItem onClick={handleRoute(history, "/bus-booking")}>Bus Ticket</NavItem>
                <NavItem onClick={handleRoute(history, "/ticket-status")}>Print Ticket</NavItem>
                <NavItem onClick={handleRoute(history, "/cancel-ticket")}>Cancel Ticket</NavItem>
                <NavItem onClick={handleRoute(history, "/")} target="_blank">
                  Agent Login
                </NavItem>
              </Nav>
            </Col>
            <Col xs={12} sm={4} md={3} lg={3}>
              <h4 className="heading">Help & Support</h4>
              <Nav className="list-unstyled">
                <NavItem onClick={handleRoute(history, "/")}>Home</NavItem>
                <NavItem onClick={handleRoute(history, "/paymentoption")}>Payment Option</NavItem>
                <NavItem onClick={handleRoute(history, "/faq")}>FAQs</NavItem>
                <NavItem onClick={handleRoute(history, "/contact-us")}>Help</NavItem>
              </Nav>
            </Col>
            <Col xs={12} sm={4} md={3} lg={3}>
              <h4 className="heading">Policies</h4>
              <Nav className="list-unstyled">
                <NavItem onClick={handleRoute(history, "/privacy-policy")}>Privacy Policy</NavItem>
                <NavItem onClick={handleRoute(history, "/terms-conditions")}>Terms</NavItem>
              </Nav>
            </Col>
          </Row>
        </Grid>
        <section className="copyright-box">
          <div className="container">
            <Row>
              <p style={{ textAlign: 'center' }}>
                <strong>
                  Copyright &copy; {this.state.year} DigitalBihar. All
                  rights reserved
                </strong>
              </p>
            </Row>
          </div>
        </section>
      </footer>
    );
  }
}
export default Footer;
Footer.contextTypes = {
  router: PropTypes.object
};
