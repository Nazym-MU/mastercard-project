import React, { useState } from 'react';

const challenges = [
  {
    id: 1,
    name: 'Data Quality',
    leftFact: 'Poor data quality can lead to inaccurate AI models and unreliable predictions.',
    rightFact: '60% of organizations report data quality issues as a major obstacle in AI implementation.'
  },
  {
    id: 2,
    name: 'Lack of Infrastructure',
    leftFact: 'Inadequate computing power and storage can hinder the development and deployment of AI models.',
    rightFact: '45% of companies cite insufficient IT infrastructure as a barrier to AI adoption.'
  },
  {
    id: 3,
    name: 'Skill Gap',
    leftFact: 'Shortage of AI expertise can slow down implementation and limit the potential of AI projects.',
    rightFact: '76% of enterprises report a shortage of AI and machine learning experts.'
  },
  {
    id: 4,
    name: 'Regulatory Compliance',
    leftFact: 'Navigating complex regulations around data privacy and AI use can be challenging for banks.',
    rightFact: '83% of financial institutions view regulatory compliance as a significant challenge in AI adoption.'
  },
  {
    id: 5,
    name: 'Integration with Legacy Systems',
    leftFact: 'Integrating AI with existing legacy banking systems can be complex and time-consuming.',
    rightFact: '70% of banks struggle with integrating AI into their legacy IT infrastructure.'
  }
];

const Challenges = () => {
  const [hoveredChallenge, setHoveredChallenge] = useState(null);

  return (
    <section className="challenges" id="challenges">
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