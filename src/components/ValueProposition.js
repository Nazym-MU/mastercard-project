import React from 'react';

const features = [
  {
    title: "AI Readiness Assessment",
    description: "Provides a structured, comprehensive evaluation of a bank's current AI capabilities, including technology infrastructure, data management, and organizational readiness that helps banks identify strengths and areas for improvement.",
    icon: "🧠"
  },
  {
    title: "Tailored Recommendations",
    description: "Offers actionable, customized recommendations that align with the bank's specific AI maturity level. These recommendations guide banks on practical steps to enhance their AI capabilities, such as technology upgrades, staff training, and regulatory compliance.",
    icon: "🎯"
  },
  {
    title: "Regulatory Compliance",
    description: "Assists in navigating the complex regulatory landscape associated with AI, ensuring that banks are compliant with legal standards and managing risks effectively.",
    icon: "✅"
  },
  {
    title: "Strategic Planning",
    description: "Helps banks develop a clear roadmap for AI integration, aligning AI strategies with business goals. This strategic planning reduces the risk of misaligned AI projects, ensuring better resource allocation and investment.",
    icon: "🔗"
  }
];

const ValueProposition = () => {
  return (
    <section className="value-proposition" id="valueProposition">
      <div className="value-content">
        <h2>Value Proposition of Our Solution</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="differentiation">
          <h3>How We Differentiate</h3>
          <ul>
            <li>Focused on Kazakhstan's specific banking landscape</li>
            <li>Combines global AI best practices with local expertise</li>
            <li>Offers an in-depth analysis across multiple dimensions, including technology, people, processes, and culture.</li>
            <li>Provides ongoing optimization and scaling strategies</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;