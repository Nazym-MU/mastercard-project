import React from 'react';

const Statistic = ({ number, text, source }) => (
  <div className="statistic">
    <div className="statistic-number">{number}</div>
    <div className="statistic-text">{text}</div>
    <div className="statistic-source">{source}</div>
  </div>
);

export default Statistic;