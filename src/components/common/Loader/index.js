import React from 'react';
import './index.scss';

const Loader = ({ inline }) =>
  inline ? (
    <div className="lds-roller">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  ) : (
    <div className="custom-loader">
      <div className="lds-hourglass" />
    </div>
  );

export default Loader;
