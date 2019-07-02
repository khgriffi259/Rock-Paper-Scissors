import React from 'react';
import './App.css';
import Scoreboard from './components/scoreboard';
import Brain from './components/brain';
import GameContextProvider from './contexts/GameContext'


function App() {
   
  return (
    <div className="App">
      <div className="container">
        <h1>Rock Paper Scissors</h1>
      <GameContextProvider>
          <Scoreboard />
          <Brain />
      </GameContextProvider>
      </div>
    </div>
  );
}

export default App;
