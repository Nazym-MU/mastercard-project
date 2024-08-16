import React from 'react';
import Statistic from './Statistic';

const statistics = [
  { number: '91%', text: 'of financial services companies are either assessing AI or already using it in production', source: 'Nvidia, 2024' },
  { number: '60-70%', text: "employee's working time that generative AI is able to automate", source: 'McKinsey, 2023' },
  { number: '4M', text: 'decisions in banks daily are made by AI', source: 'Accenture' },
  { number: '$200B<', text: 'generative AI is expected to add to the banking sector annually', source: 'McKinsey, 2023' }
];

const GlobalTrend = () => (
  <section className="global-trend" id="market">
    <div className="statistics-row">
      {statistics.map((stat, index) => (
        <React.Fragment key={index}>
          <Statistic number={stat.number} text={stat.text} source={stat.source} />
          {index < statistics.length - 1 && <div className="vertical-line"></div>}
        </React.Fragment>
      ))}
    </div>
  </section>
);

export default GlobalTrend;