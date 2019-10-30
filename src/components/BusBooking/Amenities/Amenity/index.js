import React, { Component } from 'react';
import './index.scss';

export default ({ list }) => (
  <div className="amenaties">
    {list.length ? list.map(item => (
      <span className="label label-info">{item.label}</span>
    )): <span>Not Found</span>}
  </div>
);
