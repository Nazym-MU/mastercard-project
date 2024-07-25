import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'intro', title: 'Intro' },
  { id: 'globalTrend', title: 'Global Trends' },
  { id: 'useCases', title: 'Use Cases' },
  { id: 'challenges', title: 'Challenges' },
  { id: 'currentState', title: 'Current State' },
  { id: 'gapAnalysis', title: 'Gap Analysis' },
  { id: 'survey', title: 'Survey' },
  { id: 'swotAnalysis', title: 'SWOT Analysis' },
  { id: 'problem', title: 'Problem & Need' },
  { id: 'plan', title: 'Plan' },
  { id: 'interview', title: 'Interview & Insights' },
  { id: 'prototype', title: 'Prototype' }
];

const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const activeSection = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (activeSection) {
        setActiveSection(activeSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="table-of-contents">
      {sections.map((section, index) => (
        <React.Fragment key={section.id}>
          <a
            href={`#${section.id}`}
            className={`toc-item ${activeSection === section.id ? 'active' : ''}`}
          >
            {section.title}
          </a>
          {index < sections.length - 1 && <div className="toc-line"></div>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default TableOfContents;
