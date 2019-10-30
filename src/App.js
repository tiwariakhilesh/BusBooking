import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loader from './components/common/Loader';
import HomeContainer from './components/common/HomeContainer';
import './App.scss';


import {
  Login,
  BusDashboard,
  Forgotpassword,
  Resetpassword,
  About,
  Privacy,
  Terms,
  Contact,
  Register,
  Faq,
  Career,
  PassengerInfo,
  Dashboard,
  UserAgreement,
  Gst,
  PaymentOption,
  Payment,
  TicketStatus,
  CancelTicket,
  Profile,
  CCAvenue
} from './utils/lazyLoad';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            component={props => (
              <HomeContainer {...props}>
                <Suspense fallback={<Loader />}>
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Register} />
                  <Route path="/about" component={About} />
                  <Route path="/privacy-policy" component={Privacy} />
                  <Route path="/terms-conditions" component={Terms} />
                  <Route path="/contact-us" component={Contact} />
                  <Route path="/bus-booking" component={BusDashboard} />
                  <Route path="/forgotpassword" component={Forgotpassword} />
                  <Route path="/resetpassword" component={Resetpassword} />
                  <Route path="/faq" component={Faq} />
                  <Route path="/careers" component={Career} />
                  <Route path="/passenger" component={PassengerInfo} />
                  <Route path="/user-agreement" component={UserAgreement} />
                  <Route path="/via-gst-details" component={Gst} />
                  <Route path="/paymentoption" component={PaymentOption} />
                  <Route path="/payment" component={Payment} />
                  <Route path="/ticket-status" component={TicketStatus} />
                  <Route path="/cancel-ticket" component={CancelTicket} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/ccavenue" component={CCAvenue}/>
                </Suspense>
              </HomeContainer>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
