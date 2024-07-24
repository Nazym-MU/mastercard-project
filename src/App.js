import React from 'react';
import './App.css';
import Intro from './components/Intro';
import GlobalTrend from './components/GlobalTrend';
import TableOfContents from './components/TableOfContents';
import UseCases from './components/UseCases';
import Challenges from './components/Challenges';
import CurrentState from './components/CurrentState';

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
      </main>
    </div>
  );
};

export default App;