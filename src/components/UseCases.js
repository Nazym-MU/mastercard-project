import React, { useState } from 'react';

const useCases = [
  { id: 1, name: 'Fraud Detection', category: 'risk', color: '#3498db' },
  { id: 2, name: 'Credit Scoring', category: 'risk', color: '#3498db' },
  { id: 3, name: 'Collections Support', category: 'risk', color: '#3498db' },
  { id: 4, name: 'Identity Management', category: 'risk', color: '#3498db' },
  { id: 5, name: 'AML Compliance', category: 'risk', color: '#3498db' },
  { id: 6, name: 'Real-time transaction monitoring', category: 'risk', color: '#3498db' },
  { id: 7, name: 'Automating aspects of cybersecurity', category: 'risk', color: '#3498db' },
  { id: 8, name: 'Verifying vendor payment details to prevent fraud', category: 'risk', color: '#3498db' },
  { id: 8, name: 'Chatbots', category: 'support', color: '#f1c40f' },
  { id: 9, name: 'Robo-advisors', category: 'support', color: '#f1c40f' },
  { id: 10, name: 'Sentiment Analysis', category: 'support', color: '#f1c40f' },
  { id: 11, name: 'Chargeback Processing', category: 'support', color: '#f1c40f' },
  { id: 12, name: 'AI Call Centers', category: 'support', color: '#f1c40f' },
  { id: 13, name: 'Targeted Recommendations', category: 'marketing', color: '#9b59b6' },
  { id: 14, name: 'Customer Value Management', category: 'marketing', color: '#9b59b6' },
  { id: 15, name: 'Personalized Marketing', category: 'marketing', color: '#9b59b6' },
  { id: 16, name: 'Predicting future outcomes and trends with precision', category: 'data', color: '#e74c3c' },
  { id: 17, name: 'Identifying new business opportunities', category: 'data', color: '#e74c3c' },
  { id: 18, name: 'Customer Segmentation', category: 'data', color: '#e74c3c' },
  { id: 19, name: 'Generating data-informed banking solutions', category: 'data', color: '#e74c3c' },
  { id: 20, name: 'Data Extraction', category: 'automation', color: '#34495e' },
  { id: 21, name: 'Documentation Processing', category: 'automation', color: '#34495e' },
  { id: 22, name: 'Low-complexity Customer Requests', category: 'automation', color: '#34495e' },
  { id: 23, name: 'Email Processing', category: 'automation', color: '#34495e' },
  { id: 24, name: 'Streamlining back-office activities', category: 'automation', color: '#34495e' },
  { id: 25, name: 'Biometric authentication', category: 'other', color: '#95a5a6'},
  { id: 26, name: 'Personalized financial advice', category: 'other', color: '#95a5a6' },
  { id: 27, name: 'Automated trading', category: 'other', color: '#95a5a6' },
  { id: 28, name: 'Multilingual content generation and translation', category: 'other', color: '#95a5a6' }
];

const categories = [
  { name: 'Risk Assessment', color: '#3498db', example: "JPMorgan Chase uses AI for real-time fraud detection and risk management." },
  { name: 'Customer Support', color: '#f1c40f', example: "Bank of America implemented Erica, their AI-powered virtual assistant, in 2018." },
  { name: 'Marketing', color: '#9b59b6', example: "Wells Fargo uses AI for personalized marketing and product recommendations." },
  { name: 'Data Analytics', color: '#e74c3c', example: "HSBC uses AI to analyze customer data and predict future trends." },
  { name: 'Automation', color: '#34495e', example: "Capital One uses AI to automate repetitive tasks and improve efficiency." },
  { name: 'Other', color: '#95a5a6', example: "Citi uses AI for biometric authentication and personalized financial advice." }
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
          : "Explore how leading global banks are leveraging AI."}
      </div>
      <div className="citation-use-case">
        <p>Mastercard. (2019). <i>Artificial intelligence in banking: Implementing buzzword tech.</i></p>
      </div>
    </section>
  );
};

export default UseCases;