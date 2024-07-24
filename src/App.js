import React from 'react';
import './App.css';
import Intro from './components/Intro';
import GlobalTrend from './components/GlobalTrend';
import TableOfContents from './components/TableOfContents';

const App = () => {
  return (
    <div className="app-container">
      <TableOfContents />
      <main>
        <Intro />
        <GlobalTrend />
      </main>
    </div>
  );
};

export default App;