// CSS
import './App.css';

// REACT IMPORTS
import { useState, useEffect, useCallback } from 'react';

// DATA
import { wordsList } from './data/words';

// COMPONENTS
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' }
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  // START THE GAME
  const startGame = () => {
    setGameStage(stages[1].name);
  };

  // PROCESS LETTERS
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  // RETRY THE GAME
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
