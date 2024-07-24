import React from 'react';

const statistics = [
  {
    id: 1,
    value: '69%',
    description: "don't use AI",
    position: 'right'
  },
  {
    id: 2,
    value: '3',
    description: "second-tier banks have approached the full implementation of AI",
    position: 'left'
  },
  {
    id: 3,
    value: '55%',
    description: "are not considering using AI in 2024",
    position: 'right'
  }
];

const CurrentState = () => {
  return (
    <section className="current-state" id="currentState">
      <h2>According to the survey conducted by National Bank of Kazakhstan in February 2024, of 94+ financial market participants...</h2>
      <div className="timeline">
        {statistics.map((stat) => (
          <div key={stat.id} className={`timeline-item ${stat.position}`}>
            <div className="timeline-content">
              <span className="timeline-value">{stat.value}</span>
              <p className="timeline-description">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentState;