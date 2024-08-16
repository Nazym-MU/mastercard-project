import React, { useState } from 'react';

const challenges = [
  {
    id: 1,
    name: 'Data Inefficiencies',
    leftFact: 'Poor data quality can lead to inaccurate AI models and unreliable predictions.',
    rightFact: '60% of organizations report data quality issues as a major obstacle in AI implementation.'
  },
  {
    id: 2,
    name: 'Large Upfront Investment',
    leftFact: 'Inadequate computing power and storage can hinder the development and deployment of AI models.',
    rightFact: '45% of companies cite insufficient IT infrastructure as a barrier to AI adoption.'
  },
  {
    id: 3,
    name: 'AI Knowledge Deficit',
    leftFact: 'Shortage of AI expertise can slow down implementation and limit the potential of AI projects.',
    rightFact: '76% of enterprises report a shortage of AI and machine learning experts.'
  },
  {
    id: 4,
    name: 'Ethical and Regulatory Hurdles',
    leftFact: 'Navigating complex regulations around data privacy and AI use can be challenging for banks. Real-world data often contains errors and biases.',
    rightFact: '83% of financial institutions view regulatory compliance as a significant challenge in AI adoption.'
  }
];

const Challenges = () => {
  const [hoveredChallenge, setHoveredChallenge] = useState(null);

  return (
    <section className="challenges">
      <h2>But there are some challenges...</h2>
      <div className="challenges-content">
        <div className="challenges-left">
          {hoveredChallenge && <p>{hoveredChallenge.leftFact}</p>}
        </div>
        <div className="challenges-middle">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className={`challenge-item ${hoveredChallenge === challenge ? 'active' : ''}`}
              onMouseEnter={() => setHoveredChallenge(challenge)}
              onMouseLeave={() => setHoveredChallenge(null)}
            >
              {challenge.name}
            </div>
          ))}
        </div>
        <div className="challenges-right">
          {hoveredChallenge && <p>{hoveredChallenge.rightFact}</p>}
        </div>
      </div>
    </section>
  );
};

export default Challenges;