import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Plan = () => {
  const sectionRef = useRef(null);
  const leftColumnRef = useRef(null);
  const middleColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftColumn = leftColumnRef.current;
    const middleColumn = middleColumnRef.current;
    const rightColumn = rightColumnRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    tl.to(leftColumn.querySelector('.initial-text'), {
      opacity: 0,
      y: -50,
      duration: 0.3,
    })
      .to(leftColumn.querySelector('.hypothesis-text'), {
        opacity: 1,
        y: 0,
        duration: 0.3,
      }, '-=0.1')
      .to(middleColumn.querySelector('.column-content'), {
        opacity: 1,
        y: 0,
        duration: 0.3,
      }, '-=0.2')
      .to(rightColumn.querySelector('.column-content'), {
        opacity: 1,
        y: 0,
        duration: 0.3,
      }, '-=0.1')
      .to(middleColumn.querySelector('.additional-content'), {
        opacity: 1,
        y: 0,
        duration: 0.3,
      }, '+=0.2')
      .to(rightColumn.querySelector('.additional-content'), {
        opacity: 1,
        y: 0,
        duration: 0.3,
      }, '-=0.1');

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <section className="plan" id='plan' ref={sectionRef}>
      <div className="plan-column left" ref={leftColumnRef}>
        <div className="initial-text">
          <h2>Therefore</h2>
          <p>We have decided to develop an AI adoption self-assessment tool to evaluate your bank's AI readiness and provide tailored recommendations for improvement.</p>
          <p>But how do we create this tool? Let's explore the key questions we need to address.</p>
        </div>
        <div className="hypothesis-text">
          <h3>To narrow the focus, we have developed a hypothesis:</h3>
          <p className="hypothesis">
            "Kazakhstan banks lag behind international counterparts in AI adoption due to three main factors: insufficient technological infrastructure, a shortage of skilled AI professionals, and issues with regulatory compliance."
          </p>
          <p>We can test this hypothesis through additional research and by gaining deep insights from interviews with industry experts.</p>
        </div>
      </div>
      <div className="plan-column middle" ref={middleColumnRef}>
        <div className="column-content">
          <h2>Assessment</h2>
          <p>How to measure AI adoption?</p>
        </div>
        <div className="additional-content">
          <p>We identified a comprehensive AI readiness questionnaire developed by renowned AI leader Allie K. Miller.</p> 
          <p>This questionnaire serves as the foundation for our self-assessment tool, ensuring a thorough evaluation of AI adoption across various dimensions.</p>
          <p>[To be continued...]</p>
        </div>
      </div>
      <div className="plan-column right" ref={rightColumnRef}>
        <div className="column-content">
          <h2>Action</h2>
          <p>What to include in the recommendations?</p>
        </div>
        <div className="additional-content">
          <p>Through extensive interviews with AI experts, bank executives, and data scientists, coupled with in-depth research, we've developed a set of tailored recommendations for banks at different stages of AI readiness.</p> 
          <p>Our recommendations focus on the three critical areas identified in our hypothesis: technological infrastructure, AI talent acquisition and development, and regulatory compliance strategies.</p>
          <p>[To be continued...]</p>
        </div>
      </div>
    </section>
  );
};

export default Plan;