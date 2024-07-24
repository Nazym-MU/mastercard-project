import React, { useState } from 'react';

const useCases = [
  { id: 1, name: 'Risk Assessment', category: 'risk', color: '#3498db' },
  { id: 2, name: 'Fraud Detection', category: 'risk', color: '#3498db' },
  { id: 3, name: 'Customer Support', category: 'support', color: '#f1c40f' },
  { id: 4, name: 'Chatbots', category: 'support', color: '#f1c40f' },
  { id: 5, name: 'Credit Scoring', category: 'risk', color: '#3498db' },
  { id: 6, name: 'Investment Management', category: 'investment', color: '#2ecc71' },
  { id: 7, name: 'AML Compliance', category: 'compliance', color: '#e74c3c' },
  { id: 8, name: 'Personalized Marketing', category: 'marketing', color: '#9b59b6' }
];

const categories = [
  { name: 'Risk Assessment', color: '#3498db', example: "JPMorgan Chase uses AI for real-time fraud detection and risk management." },
  { name: 'Customer Support', color: '#f1c40f', example: "Bank of America implemented Erica, their AI-powered virtual assistant, in 2018." },
  { name: 'Investment', color: '#2ecc71', example: "BlackRock uses AI-powered Aladdin platform for investment management." },
  { name: 'Compliance', color: '#e74c3c', example: "HSBC partnered with AI firms to enhance its AML and compliance processes." },
  { name: 'Marketing', color: '#9b59b6', example: "Wells Fargo uses AI for personalized marketing and product recommendations." },
];

const UseCases = () => {
  const [hoveredUseCase, setHoveredUseCase] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section className="use-cases" id="useCases">
      <h2>Let's look at examples of AI use cases in banks</h2>
      <div className="use-cases-content">
        <div className="use-cases-container">
          <div className="circles-container">
            {useCases.map((useCase) => (
              <div
                key={useCase.id}
                className={`circle ${hoveredCategory === useCase.category ? 'active' : ''}`}
                style={{ backgroundColor: useCase.color }}
                onMouseEnter={() => setHoveredUseCase(useCase)}
                onMouseLeave={() => setHoveredUseCase(null)}
              >
                {hoveredUseCase === useCase && (
                  <div className="use-case-tooltip">{useCase.name}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="legend-container">
          {categories.map((category) => (
            <div
              key={category.name}
              className="legend-item"
              onMouseEnter={() => setHoveredCategory(category.name.toLowerCase())}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="legend-color" style={{ backgroundColor: category.color }}></div>
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="category-example">
        {hoveredCategory 
          ? categories.find(cat => cat.name.toLowerCase() === hoveredCategory).example
          : "Hover over categories on the right to discover how leading global banks are implementing AI in their operations."}
      </div>
    </section>
  );
};

export default UseCases;