import React, { useState } from 'react';

const swotData = [
  {
    title: 'Strengths',
    points: [
      'Strong domestic market presence',
      'Government support for digitalization',
      'Data generation and collection capabilities',
    ]
  },
  {
    title: 'Weaknesses',
    points: [
      'Smaller R&D budgets compared to global banks',
      'Lack of data quality',
      'Insufficient digitization of data',
    ]
  },
  {
    title: 'Opportunities',
    points: [
      'Potential collaboration with tech giants as NVIDIA, Microsoft, Amazon to locate data centers in Kazakhstan',
      'Infrastructure potential',
      'Young and tech-savvy population',
    ]
  },
  {
    title: 'Threats',
    points: [
      'Cybersecurity risks',
      'Regulatory challenges in AI implementation',
      'Dependency on foreign technology',
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
      <div className="citation-swot">
        <p>
          The SWOT analysis was informed by insights from the Ministry of Digital Development, Innovation, and Aerospace Industry's (2024) Concept for the Development of Artificial Intelligence for 2024–2029, along with additional considerations.
        </p>
        </div>
    </section>
  );
};

export default SwotAnalysis;