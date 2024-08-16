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
    <section className="plan-container" id='solution' ref={sectionRef}>
      <div className="plan">
        <div className="plan-column left">
          <div className="content" ref={addToRefs}>
            <h2>Hypothesis</h2>
          </div>
          <div className="content hypothesis-text" ref={addToRefs}>
            <p className='markformc-font-regular'>
            We began our exploration with the question:
            </p>
            <p className='hypothesis'>How can we help Kazakhstan banks accelerate their AI adoption?</p>
            <p>To narrow the focus, we have developed a hypothesis:</p>
            <p className="hypothesis">
              "Kazakhstan banks lag behind international counterparts in AI adoption due to three main factors: insufficient technological infrastructure, a shortage of skilled AI professionals, and issues with regulatory compliance."
            </p>
            <p>We tested this hypothesis through additional research and by gaining deeper insights from interviews with industry experts.</p>
          </div>
        </div>
        <div className="plan-column middle">
          <div className="content" ref={addToRefs}>
            <h2>Problem</h2>
            <p className='markformc-font-regular'>Our research has identified a significant gap in AI adoption and utilization within the Kazakhstani banking sector compared to global counterparts.</p>
            <p>AI technologies offer huge potential for enhancing efficiency, but many Kazakhstan banks are struggling to effectively implement and leverage these tools.</p>
            <p className='hypothesis'>They lack a clear, structured pathway for adopting AI technologies.</p>
          </div>
        </div>
        <div className="plan-column right">
          <div className="content" ref={addToRefs}>
            <h2>Solution</h2>
          </div>
          <div className="content" ref={addToRefs}>
            <p>To address these challenges, we propose:</p>
            <p className='hypothesis'>The development of an AI adoption self-assessment tool for Kazakhstan banks.</p>
            <p>This tool aims to provide a comprehensive assessment of a bank's readiness for AI and offer tailored recommendations to improve AI adoption, focusing on areas mentioned in the hypothesis.</p>
            <p>We identified a comprehensive AI readiness questionnaire developed by an AI leader Allie K. Miller, which serves as the foundation for our self-assessment tool.</p>
            <p>Through extensive interviews with AI experts, bank executives, and data scientists, coupled with in-depth research, we've developed a set of tailored recommendations for banks at different stages of AI readiness.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;