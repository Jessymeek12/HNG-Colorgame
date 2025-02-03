import React, {useState} from "react";
import "./App.css";

const COLORS = ["red", "blue", "green", "yellow", "purple", "orange"];

const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

const App = () => {
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);

  const handleGuess = (color) => {
    if (color === targetColor) {
      setMessage("Correct! 🎉");
      setScore(score + 1);
    } else {
      setMessage("Wrong! Try again. ❌");
    }
  };

  const handleNewGame = () => {
    setTargetColor(getRandomColor());
    setMessage("");
  };

  return (
    <div className="gameContainer">
      <h2 data-testid="gameInstructions">Guess the correct color!</h2>
      <div
        className="colorBox"
        style={{backgroundColor: targetColor}}
        data-testid="colorBox"
      ></div>
      <div className="options">
        {COLORS.map((color) => (
          <button
            key={color}
            style={{backgroundColor: color}}
            className="colorButton"
            onClick={() => handleGuess(color)}
            data-testid="colorOption"
          ></button>
        ))}
      </div>
      <p className="gameStatus" data-testid="gameStatus">
        {message}
      </p>
      <p className="score" data-testid="score">
        Score: {score}
      </p>
      <button
        className="newGame"
        onClick={handleNewGame}
        data-testid="newGameButton"
      >
        New Game
      </button>
    </div>
  );
};

export default App;
