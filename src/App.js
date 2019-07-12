import React from 'react';
import './App.css';
import Brain from './components/brain';
import GameContextProvider from './contexts/GameContext';

function App() {
   
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1 className="title">Rock Paper Scissors</h1>
        </header>
        <GameContextProvider>
            <Brain />
        </GameContextProvider>
        {/* <LoginForm /> */}
      </div>
    </div>
  );
}

export default App;
