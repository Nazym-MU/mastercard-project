import React, { useState, useEffect } from 'react';

const excerpts = [
  {
    text: "The importance for Kazakhstan's financial regulators to <highlight>actively engage in experimentation and R&D in AI</highlight> is underscored by two goals: enhancing regulatory efficiency and stimulating innovation to maintain competitive advantage and market stability.",
    citation: 'National Payment Corporation, 2024, p. 52'
  },
  {
    text: 'The advanced application of AI in financial markets is <highlight>important with evaluation of emerging associated risks</highlight>. <highlight>Careful planning is needed</highlight> to implement AI in institutions with legacy infrastructure.',
    citation: 'National Payment Corporation, 2024, p. 48'
  },
  {
    text: '<highlight>Kazakhstan should adopt current global practices in regulation.</highlight> The next stages of development for this technology require regulators to rethink their perception of AI not only as a tool with limited application but also as <highlight>a phenomenon that requires designing of a comprehensive and multi-aspect approach.</highlight>',
    citation: 'National Payment Corporation, 2024, p. 48'
  },
  {
    text: "To execute this vision, Kazakhstan's financial regulators must embark on the <highlight>development of their own AI initiatives.</highlight> This initiative begins with a comprehensive analysis of the regulatory landscape to identify areas where AI can bring significant benefits, such as risk assessment, compliance monitoring, fraud detection, and customer interactions. It makes sense to consider the <highlight>adoption of examples from global practices</highlight>, as mentioned in other sections.",
    citation: 'National Payment Corporation, 2024, p. 52'
  },
  {
    text: 'By analyzing and <highlight>adapting successful AI frameworks</highlight> from other regulatory bodies, Kazakhstan can expedite its own technology adoption, reducing risks associated with pioneering untested solutions. This approach not only streamlines the research process but also provides valuable insights into best practices and potential pitfalls.',
    citation: 'National Payment Corporation, 2024, p. 52'
  },
  {
    text: "To effectively utilize these external solutions, Kazakhstan's financial regulators must establish a <highlight>systematic collection of information about AI-based solutions in global practice</highlight>, assessing the relevance, adaptability, and scalability of each solution to Kazakhstan's context. This process should consider other factors such as technological compatibility, data protection standards, and regulatory compliance. Once a foreign AI solution is deemed suitable, <highlight>a detailed plan should be developed</highlight> for its customization and integration into the local regulatory framework, ensuring that the solution is adapted to meet Kazakhstan's unique needs and goals.",
    citation: 'National Payment Corporation, 2024, p. 52'
  }
];

const Problem = () => {
  const [currentExcerptIndex, setCurrentExcerptIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentExcerptIndex((prevIndex) => (prevIndex + 1) % excerpts.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const currentExcerpt = excerpts[currentExcerptIndex];

  return (
    <section className="problem" id="problem">
      <div className="problem-content">
        <div className="problem-left">
          <h2>Summing up, there is a strong need for a comprehensive AI adoption strategy</h2>
          <p>
            Based on the survey results, SWOT analysis, the global trends, it's clear that Kazakhstan's financial sector needs a well-structured project plan with specific recommendations for AI adoption. This plan should address the current gaps, leverage existing strengths, and align with global best practices while considering local context.
          </p>
        </div>
        <div className="problem-right">
          <div className="excerpt-container">
            <p dangerouslySetInnerHTML={{ __html: currentExcerpt.text.replace(/<highlight>(.*?)<\/highlight>/g, '<span class="highlight">$1</span>') }} />
            <div className="citation-container">
              <hr />
              <p className="citation"><i>{currentExcerpt.citation}</i></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;