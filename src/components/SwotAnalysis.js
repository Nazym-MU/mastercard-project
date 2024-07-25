import React, { useState } from 'react';

const swotData = [
  {
    title: 'Strengths',
    points: [
      'Strong domestic market presence',
      'Government support for digitalization',
      'Young, tech-savvy population',
    ]
  },
  {
    title: 'Weaknesses',
    points: [
      'Limited AI expertise and talent pool',
      'Smaller R&D budgets compared to global banks',
      'Legacy systems in some institutions',
    ]
  },
  {
    title: 'Opportunities',
    points: [
      'Potential for rapid AI adoption',
      'Untapped market for AI-driven financial products',
      'Collaboration with fintech startups',
    ]
  },
  {
    title: 'Threats',
    points: [
      'Competition from global tech giants',
      'Cybersecurity risks',
      'Regulatory challenges in AI implementation',
    ]
  }
];

const SwotCard = ({ title, points, index }) => {
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    setTransform(`scale(1.05) perspective(1000px) rotateY(${deltaX * 20}deg) rotateX(${-deltaY * 20}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('');
  };

  return (
    <div
      className={`swot-card swot-card-${index}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
    >
      <h3>{title}</h3>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const SwotAnalysis = () => {
  return (
    <section className="swot-analysis" id="swotAnalysis">
      <h2>SWOT Analysis: Kazakhstan Banks vs Foreign Counterparts</h2>
      <div className="swot-grid">
        {swotData.map((item, index) => (
          <SwotCard key={index} title={item.title} points={item.points} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SwotAnalysis;