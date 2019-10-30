import React from 'react';
import './index.scss';
import Header from '../Header';
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';

const Home = ({ children, ...rest }) => (
  <>
    <Header {...rest} />
    {children}
    <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
    <Footer {...rest} />
  </>
);

export default Home;
