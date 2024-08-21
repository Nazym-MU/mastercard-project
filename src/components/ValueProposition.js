import React from 'react';

const features = [
  {
    title: "Improved AI Vision",
    description: "Giving banks a clear vision of their AI landscape, highlighting strengths and areas for improvement to drive future success.",
  },
  {
    title: "Tailored Implementation Plan",
    description: "Providing a tailored strategy with actionable steps, equipping banks with the tools needed for successful AI adoption and improvement.",
  },
  {
    title: "Customer Engagement",
    description: "Fostering deeper engagement with banks by providing a platform to advance AI adoption."
  }
];

const ValueProposition = () => {
  return (
    <section className="value-proposition">
      <div className="value-content">
        <h2>Impact and Value</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;