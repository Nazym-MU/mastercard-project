import React, { useState, useEffect, useRef } from 'react';

const sections = [
  { id: 'intro', title: 'Intro' },
  { id: 'globalTrend', title: 'Global Trends' },
  { id: 'useCases', title: 'Use Cases' },
  { id: 'challenges', title: 'Challenges' },
  { id: 'currentState', title: 'Current State' },
  { id: 'swotAnalysis', title: 'SWOT' },
  { id: 'gapAnalysis', title: 'Gap Analysis' },
  { id: 'survey', title: 'Survey' },
  { id: 'interview', title: 'Interview' },
  { id: 'problem', title: 'Problem' },
  { id: 'plan', title: 'Plan' },
  { id: 'prototype', title: 'Prototype' },
  { id: 'valueProposition', title: 'Value' },
  { id: 'acknowledgements', title: 'Credits' }
];

const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showScrollHint, setShowScrollHint] = useState(false);
  const tocRef = useRef(null);

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
        
        // Scroll the active item into view within the ToC
        const activeItem = document.querySelector(`.toc-item.active`);
        if (activeItem && tocRef.current) {
          activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (tocRef.current) {
      setShowScrollHint(tocRef.current.scrollHeight > tocRef.current.clientHeight);
    }
  }, []);

  return (
    <nav className="table-of-contents" ref={tocRef}>
      {showScrollHint && <div className="scroll-hint top"></div>}
      <div className="toc-content">
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
      </div>
      {showScrollHint && <div className="scroll-hint bottom"></div>}
    </nav>
  );
};

export default TableOfContents;