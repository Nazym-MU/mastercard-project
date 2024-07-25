import React from 'react';
import './App.css';
import Intro from './components/Intro';
import GlobalTrend from './components/GlobalTrend';
import UseCases from './components/UseCases';
import Challenges from './components/Challenges';
import CurrentState from './components/CurrentState';
import GapAnalysis from './components/GapAnalysis';
import SwotAnalysis from './components/SwotAnalysis';
import Survey from './components/Survey';
import Problem from './components/Problem';
import Plan from './components/Plan';
import Interview from './components/Interview';
import TableOfContents from './components/TableOfContents';

const App = () => {
  return (
    <div className="app-container">
      <TableOfContents />
      <main>
        <Intro />
        <GlobalTrend />
        <UseCases />
        <Challenges />
        <CurrentState />
        <GapAnalysis />
        <Survey />
        <SwotAnalysis />
        <Problem />
        <Plan />
        <Interview />
      </main>
    </div>
  );
};

export default App;