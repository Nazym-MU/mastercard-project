import React from 'react';
const insights = [
  {
    title: "Regulatory Compliance Challenges",
    content: "Banks face hurdles in implementing AI due to the need to ensure compliance across all AI-driven processes."
  },
  {
    title: "Limited Understanding of AI Capabilities",
    content: "Viewing AI merely as a tool for faster task completion, overlooking its potential for transforming the banking sector."
  },
  { title: "Insight #3", content: "" },
  { title: "Insight #4", content: "" },
  { title: "Insight #5", content: "" }
];

const Interview = () => {
  return (
    <section className="interview">
      <div className="interview-content">
        <div className="questions-side">
          <h2>Interview Questions</h2>
          <p className="interview-intro">We also conducted interviews to gain a deeper understanding of the current situation. The questions we asked included:</p>
          
        </div>
        <div className="insights-side">
          <h2>Interview Insights</h2>
          <div className="insights-grid">
            {insights.map((insight, index) => (
              <div key={index} className={`insight-card ${insight.content ? 'filled' : 'empty'}`}>
                <h3>{insight.title}</h3>
                {insight.content && <p>{insight.content}</p>}
                {!insight.content && <div className="placeholder-text">Coming soon...</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interview;