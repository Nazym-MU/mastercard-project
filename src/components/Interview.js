import React from 'react';

const insights = [
  {
    title: "Regulatory Compliance Challenges",
    content: "Banks face challenges in implementing AI due to the need to ensure compliance across all AI-driven processes."
  },
  {
    title: "Limited Understanding of AI Capabilities",
    content: "Viewing AI merely as a tool for faster task completion, overlooking its potential for transforming the banking sector."
  },
  {
    title: "Prioritizing Security",
    content: "Banks should prioritize implementing AI in areas that enhance security and reduce fraud before proceeding to other areas."
  },
  {
    title: "Training Staff",
    content: "To successfully transform a bank, banks first need to train department heads to understand the psychological component of AI."
  },
  {
    title: "Pre-built AI Solutions",
    content: "Banks in Kazakhstan adopt pre-built AI solutions rather than developing in-house models due to the high costs associated with training AI models in-house."
  },
  {
    title: "Data Quality",
    content: "When training AI models, banks need to ensure that the data used is clean and accurate, which requires significant resources."
  }
];

const interviews = [
  {
    name: "Yerik Umurzakov",
    title: "Mastercard Advisor and C-level Bank Executive",
    date: "July 19, 2024",
    image: "/interview_1.jpeg"
  },
  {
    name: "Nailya Alim",
    title: "AI Specialist and NLP Engineer",
    date: "July 29, 2024",
    image: "/interview_2.jpeg"
  },
  {
    name: "Asset Sadybekov",
    title: "Director of ForteBank’s Astana Branch",
    date: "July 29, 2024",
    image: "/interview_3.png"
  },
  {
    name: "Aidana Kaskyrbek",
    title: "Advisor to the Chairman of the National Payment Corporation in Kazakhstan",
    date: "August 12, 2024",
    image: "/interview_4.jpeg"
  }
];

const Interview = () => {
  return (
    <section className="interview">
      <div className="interview-content">
        <div className="questions-side">
          <h2>Interview</h2>
          <p className="interview-intro">We also conducted interviews to gain a deeper understanding of the current situation. We interviewed the following people:</p>
          <div className="interview-list">
            {interviews.map((interview, index) => (
              <div key={index} className="interview-card">
                <div className="interview-image-container">
                  <img src={interview.image} alt={interview.name} className="interview-image" />
                </div>
                <div className="interview-details">
                  <h3>{interview.name}</h3>
                  <p>{interview.title}</p>
                  <p>{interview.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="insights-side">
          <h2>Interview Insights</h2>
          <div className="insights-grid">
            {insights.map((insight, index) => (
              <div key={index} className="insight-card">
                <h3>{insight.title}</h3>
                <p>{insight.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interview;