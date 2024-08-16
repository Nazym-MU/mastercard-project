import React, { useState } from 'react';

const aiUseCases = [
  { name: 'Client support improvement', percentage: 16, foreignPercentage: 45, top: '20%', left: '20%' },
  { name: 'Risk management', percentage: 14, foreignPercentage: 40, top: '40%', left: '60%' },
  { name: 'Cybersecurity & information protection', percentage: 6, foreignPercentage: 35, top: '60%', left: '30%' },
];

const bankUseCaseMapping = {
  'Halyk Bank': ['Client support improvement', 'Risk management', 'Cybersecurity & information protection'],
  'Kaspi.kz': ['Client support improvement', 'Risk management', 'Cybersecurity & information protection'],
  'Bank CenterCredit': ['Client support improvement', 'Risk management', 'Cybersecurity & information protection'],
  'Otbasy bank': ['Client support improvement'],
  'ForteBank': ['Client support improvement'],
  'Jusan Bank': ['Client support improvement'],
  'Eurasian Bank': ['Client support improvement'],
  'Freedom Bank': ['Client support improvement', 'Risk management', 'Cybersecurity & information protection'],
  'Altyn Bank': [],
  'Home Credit Bank': ['Client support improvement'],
  'Nurbank': [],
  'Bereke Bank': ['Client support improvement', 'Risk management'],
};

const banks = [
  'Halyk Bank', 'Kaspi.kz', 'Bank CenterCredit', 'Otbasy bank', 'ForteBank', 
  'Jusan Bank', 'Eurasian Bank', 'Freedom Bank', 
  'Altyn Bank', 'Home Credit Bank', 'Nurbank', 'Bereke Bank'
].map(name => ({ name, useCases: bankUseCaseMapping[name] || [] }));

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
      onMouseEnter={() => onClick(name)}
      onMouseLeave={() => onClick(null)}
    >
      <div>{percentage}%</div>
      <div className="circle-name">{name}</div>
    </div>
  );
};

const BankLogo = ({ name, isActive }) => (
  <div className={`bank-logo ${isActive ? 'active' : ''}`}>
    <img src={`/bank-logos/${name.toLowerCase().replace(/\s+/g, '-')}.png`} alt={name} />
    <span>{name}</span>
  </div>
);

const GapAnalysis = () => {
  const [hoveredUseCase, setHoveredUseCase] = useState(null);
  const [isKazakhstan, setIsKazakhstan] = useState(true);

  return (
    <section className="gap-analysis">
      <div className="content-wrapper">
        <div className="left-side">
          <h2>Where do they use AI?</h2>
          <div className="circles-container-bank">
            {aiUseCases.map((useCase) => (
              <Circle
                key={useCase.name}
                name={useCase.name}
                percentage={isKazakhstan ? useCase.percentage : useCase.foreignPercentage}
                top={useCase.top}
                left={useCase.left}
                onClick={setHoveredUseCase}
              />
            ))}
          </div>
        </div>
        <div className="right-side">
          <div className={`toggle-container ${!isKazakhstan ? 'global' : ''}`}>
            <label className="switch">
              <input
                type="checkbox"
                checked={!isKazakhstan}
                onChange={() => setIsKazakhstan(!isKazakhstan)}
              />
              <span className="slider"></span>
            </label>
            <span className="toggle-label">{isKazakhstan ? 'Kazakhstan' : 'Global'}</span>
          </div>
          <div className="banks-wrapper">
            {isKazakhstan && (
              <div className="banks-container">
                {banks.map((bank) => (
                  <BankLogo
                    key={bank.name}
                    name={bank.name}
                    isActive={hoveredUseCase && bank.useCases.includes(hoveredUseCase)}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="citation-gap">
        <p>
        National Payment Corporation. (2024). <i>Artificial intelligence in Kazakhstan financial market</i>. npc.kz.
        </p>
      </div>
        </div>
      </div>
    </section>
  );
};


export default GapAnalysis;