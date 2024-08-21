import React, { useState } from 'react';

const aiUseCases = [
  { name: 'Client support improvement', percentage: 16, foreignPercentage: 45, top: '15%', left: '15%' },
  { name: 'Risk management', percentage: 14, foreignPercentage: 40, top: '35%', left: '60%' },
  { name: 'Cybersecurity & information protection', percentage: 6, foreignPercentage: 35, top: '70%', left: '30%' },
];

const aiTechnologies = [
  { name: 'LLMs', percentage: 11, foreignPercentage: 47, top: '35%', left: '20%' },
  { name: 'NLP', percentage: 10, foreignPercentage: 47, top: '10%', left: '55%' },
  { name: 'Gen AI', percentage: 6, foreignPercentage: 43, top: '70%', left: '50%' },
];

const Circle = ({ name, percentage, top, left, onClick }) => {
  const size = Math.max(80, percentage * 4);
  return (
    <div
      className="circle-bank"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fontSize: `${size / 5}px`,
        top,
        left,
      }}
    >
      <div>{percentage}%</div>
      <div className="circle-name">{name}</div>
    </div>
  );
};

const GapAnalysis = () => {
  const [isKazakhstan, setIsKazakhstan] = useState(true);

  return (
    <section className="gap-analysis">
      <div className="content-wrapper">
        <div className="left-side">
          <div className="header">
            <h2>Let's compare</h2>
            <div className="toggle-container">
            <span className="toggle-label">Kazakhstan</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={!isKazakhstan}
                  onChange={() => setIsKazakhstan(!isKazakhstan)}
                />
                <span className="slider"></span>
              </label>
              <span className="toggle-label">Global</span>
            </div>
          </div>
          <h3>AI use cases</h3>
          <div className="circles-container-bank">
            {aiUseCases.map((useCase) => (
              <Circle
                key={useCase.name}
                name={useCase.name}
                percentage={isKazakhstan ? useCase.percentage : useCase.foreignPercentage}
                top={useCase.top}
                left={useCase.left}
              />
            ))}
          </div>
        </div>
        <div className="right-side">
          <h3>AI technologies</h3>
          <div className="circles-container-bank">
            {aiTechnologies.map((technology) => (
              <Circle
                key={technology.name}
                name={technology.name}
                percentage={isKazakhstan ? technology.percentage : technology.foreignPercentage}
                top={technology.top}
                left={technology.left}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GapAnalysis;
