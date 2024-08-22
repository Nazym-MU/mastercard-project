import React, { useState, useEffect } from 'react';
import './App.css';
import Intro from './components/Intro';
import GlobalTrend from './components/GlobalTrend';
import UseCases from './components/UseCases';
import Challenges from './components/Challenges';
import CurrentState from './components/CurrentState';
import SwotAnalysis from './components/SwotAnalysis';
import Survey from './components/Survey';
import Problem from './components/Problem';
import Plan from './components/Plan';
import Interview from './components/Interview';
import Prototype from './components/Prototype';
import Acknowledgements from './components/Acknowledgements';
import ValueProposition from './components/ValueProposition';
import TableOfContents from './components/TableOfContents';
import Footer from './components/Footer';
import GapAnalysis from './components/GapAnalysis';
import Logo from './components/Logo';

const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app-container">
      <TableOfContents />
      <Logo />
      <main>
        <Intro />
        <Plan />
        <GlobalTrend />
        <UseCases />
        <Challenges />
        <CurrentState />
        <GapAnalysis />
        <Survey />
        <Interview />
        <SwotAnalysis />
        <Problem />
        <Prototype />
        <ValueProposition />
        <Acknowledgements />
      </main>
      <Footer />
      {showBackToTop && (
        <div className="back-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </div>
  );
};

export default App;