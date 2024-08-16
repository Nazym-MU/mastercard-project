import React, { useState } from 'react';

const useCases = [
  { id: 1, name: 'Fraud Detection', category: 'risk', color: '#3498db' },
  { id: 2, name: 'Credit Scoring', category: 'risk', color: '#3498db' },
  { id: 3, name: 'Collections Support', category: 'risk', color: '#3498db' },
  { id: 4, name: 'Identity Management', category: 'risk', color: '#3498db' },
  { id: 5, name: 'AML Compliance', category: 'risk', color: '#3498db' },
  { id: 6, name: 'AI Call Centers', category: 'support', color: '#f1c40f' },
  { id: 7, name: 'Chatbots', category: 'support', color: '#f1c40f' },
  { id: 8, name: 'Robo-advisors', category: 'support', color: '#f1c40f' },
  { id: 9, name: 'Sentiment Analysis', category: 'support', color: '#f1c40f' },
  { id: 10, name: 'Chargeback Processing', category: 'support', color: '#f1c40f' },
  { id: 11, name: 'Personalized Marketing', category: 'marketing', color: '#9b59b6' },
  { id: 12, name: 'Targeted Recommendations', category: 'marketing', color: '#9b59b6' },
  { id: 13, name: 'Customer Value Management', category: 'marketing', color: '#9b59b6' },
  { id: 14, name: 'Data Extraction', category: 'automation', color: '#34495e' },
  { id: 15, name: 'Documentation Processing', category: 'automation', color: '#34495e' },
  { id: 16, name: 'Low-complexity Customer Requests', category: 'automation', color: '#34495e' },
  { id: 17, name: 'Email Processing', category: 'automation', color: '#34495e' },
  
];

const categories = [
  { name: 'Risk Assessment', color: '#3498db', example: "JPMorgan Chase uses AI for real-time fraud detection and risk management." },
  { name: 'Customer Support', color: '#f1c40f', example: "Bank of America implemented Erica, their AI-powered virtual assistant, in 2018." },
  { name: 'Marketing', color: '#9b59b6', example: "Wells Fargo uses AI for personalized marketing and product recommendations." },
  { name: 'Automation', color: '#34495e', example: "Capital One uses AI to automate repetitive tasks and improve efficiency." },
];

const UseCases = () => {
  const [hoveredUseCase, setHoveredUseCase] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section className="use-cases">
      <h2>Where do banks use AI?</h2>
      <div className="use-cases-content">
        <div className="use-cases-container">
          <div className="circles-container">
            {useCases.map((useCase) => {
              const isActive = hoveredCategory === useCase.category || categories.find(cat => cat.color === useCase.color)?.name.toLowerCase() === hoveredCategory;
                return (
                  <div
                    key={useCase.id}
                    className={`circle ${isActive ? 'active' : ''}`}
                    style={{ backgroundColor: useCase.color }}
                    onMouseEnter={() => setHoveredUseCase(useCase)}
                    onMouseLeave={() => setHoveredUseCase(null)}
                  >
                    {hoveredUseCase === useCase && (
                      <div className="use-case-tooltip">{useCase.name}</div>
                    )}
                </div>
        );
      })}
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
          : "Explore how leading global banks are leveraging AI. Hover over categories to see real-world examples."}
      </div>
      <div className="citation-use-case">
        <p>Mastercard. (2019). <i>Artificial intelligence in banking: Implementing buzzword tech.</i></p>
      </div>
    </section>
  );
};

export default UseCases;