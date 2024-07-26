import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Plan = () => {
  const sectionRef = useRef(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const contents = contentRefs.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    contents.forEach((content, index) => {
      tl.to(content, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }, index * 0.5);
    });

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  return (
    <section className="plan-container" ref={sectionRef}>
      <div className="plan">
        <div className="plan-column left">
          <div className="content" ref={addToRefs}>
            <h2>Therefore</h2>
            <p>We have decided to develop an AI adoption self-assessment tool to evaluate your bank's AI readiness and provide tailored recommendations for improvement.</p>
            <p>But how do we create this tool? Let's explore the key questions we need to address.</p>
          </div>
          <div className="content hypothesis-text" ref={addToRefs}>
            <h3>To narrow the focus, we have developed a hypothesis:</h3>
            <p className="hypothesis">
              "Kazakhstan banks lag behind international counterparts in AI adoption due to three main factors: insufficient technological infrastructure, a shortage of skilled AI professionals, and issues with regulatory compliance."
            </p>
            <p>We can test this hypothesis through additional research and by gaining deep insights from interviews with industry experts.</p>
          </div>
        </div>
        <div className="plan-column middle">
          <div className="content" ref={addToRefs}>
            <h2>Assessment</h2>
            <p>How to measure AI adoption?</p>
          </div>
          <div className="content" ref={addToRefs}>
            <p>We identified a comprehensive AI readiness questionnaire developed by renowned AI leader Allie K. Miller.</p> 
            <p>This questionnaire serves as the foundation for our self-assessment tool, ensuring a thorough evaluation of AI adoption across various dimensions.</p>
            <p>[To be continued...]</p>
          </div>
        </div>
        <div className="plan-column right">
          <div className="content" ref={addToRefs}>
            <h2>Action</h2>
            <p>What to include in the recommendations?</p>
          </div>
          <div className="content" ref={addToRefs}>
            <p>Through extensive interviews with AI experts, bank executives, and data scientists, coupled with in-depth research, we've developed a set of tailored recommendations for banks at different stages of AI readiness.</p> 
            <p>Our recommendations focus on the three critical areas identified in our hypothesis: technological infrastructure, AI talent acquisition and development, and regulatory compliance strategies.</p>
            <p>[To be continued...]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;