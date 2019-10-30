import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Axios from 'axios';
import config from '../../../config';
import { showToastrOnSuccess,showToastrOnError } from '../../../utils/common';


import {
  Navbar,
  Nav,
  NavDropdown,
  NavbarBrand,
  NavItem,
  MenuItem
} from 'react-bootstrap';

const handleRoute = (history, route) => e => {
  e.preventDefault();
  history.push(route);
};

class Header extends React.Component {
  handleLogOut = e => {
    e.preventDefault();
    const baseUrl = config.baseUrl;
    const loginData =
      localStorage.getItem('loginData') &&
      JSON.parse(localStorage.getItem('loginData'));
    const uid = loginData.userId;
    Axios.put(`${baseUrl}${config.logOut}/${uid}`)
      .then(res => {
          showToastrOnSuccess(res.response.data.status.message)
          localStorage.clear();
          this.props.history.push('/');        
      }).catch(res => {
        if(res.response)
          showToastrOnError(res.response.data.status.message)
      });
  };
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    const { history } = this.props;
    const loginData =
      localStorage.getItem('loginData') &&
      JSON.parse(localStorage.getItem('loginData'));
    return (
      <header className="header">
        <Navbar className="mynav">
          <Navbar.Header>
            <NavbarBrand>
              <img
                src="./assets/img/logo.png"
                className="img-resposive"
                style={{ height: 85 }}
              />
            </NavbarBrand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem onClick={handleRoute(history, '/')}>Home</NavItem>
              <NavItem onClick={handleRoute(history, '/bus-booking')}>
                Bus Ticket
              </NavItem>
              <NavItem onClick={handleRoute(history, '/ticket-status')}>
                Print Ticket
              </NavItem>
              <NavItem onClick={handleRoute(history, '/cancel-ticket')}>
                Cancel Ticket
              </NavItem>
            </Nav>
            {!loginData ? (
              <Nav pullRight>
                <NavItem onClick={handleRoute(history, '/login')}>
                  Login
                </NavItem>
                <NavItem onClick={handleRoute(history, '/signup')}>
                  SignUp
                </NavItem>
              </Nav>
            ) : (
              <Nav pullRight>
                <NavDropdown
                  eventKey={3}
                  title={<i className="fas fa-2x fa-user-circle" />}
                  id="dropdown"
                >
                  <MenuItem
                    eventKey={3.1}
                    onClick={handleRoute(history, '/profile')}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    eventKey={3.2}
                    onClick={handleRoute(history, '/resetpassword')}
                  >
                    Forget Password
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.4} onClick={this.handleLogOut}>
                    Logout
                  </MenuItem>
                </NavDropdown>
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
Header.contextTypes = {
  router: PropTypes.object
};
