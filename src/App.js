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

const guessesQty = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategoryWord, setPickedCategoryWord] = useState('');
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    // PICK A RANDOM CATEGORY
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // PICK A RANDOM WORD
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return { word, category }
  }, [words]);

  // START THE GAME
  const startGame = useCallback(() => {
    // CLEAR ALL LETTERS
    clearLetterStates();
    // PICK WORD AND PICK CATEGORY
    const { word, category } = pickWordAndCategory();

    // CREATE AN ARRAY OF LETTERS
    let wordLetters = word.split('');

    // ALTER THE LETTERS TO LOWER CASE
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // FILL STATES
    setPickedWord(word);
    setPickedCategoryWord(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  // PROCESS LETTERS
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // CHECK IF LETTER HAS ALREADY BEEN UTILIZED
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    // PUSH GUESSED LETTER OR REMOVE A GUESS
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  // CHECK IF GUESSES ENDED
  useEffect(() => {
    if (guesses <= 0) {
      // RESET ALL STATES
      clearLetterStates();
      // RESET TO THE INITIAL STATE OF THE GAME
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // CHECK WIN CONDITION
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    // WIN CONDITION
    if (guessedLetters.length === uniqueLetters.length) {
      // ADD SCORE
      setScore((actualScore) => actualScore += 100);

      // RESTART GAME WITH NEW WORD AND NEW GUESSES
      setGuesses(guessesQty);
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  // RETRY THE GAME
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategoryWord={pickedCategoryWord}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score} />
      )}
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
