import React, { useState } from 'react';
import './Sozjumbaq.css';

const Sozjumbaq = () => {
  const initialGrid = [
    ['l', 'k', 'i', 'c', 'a', 't'],
    ['e', 'w', 'o', 'l', 'f', 'a'],
    ['m', 'b', 'e', 'a', 'r', 'a'],
    ['u', 'p', 'l', 'i', 'j', 'a'],
    ['r', 'n', 'h', 'g', 's', 'a']
  ];

  const initialAnswers = ["cat", "lemur", "bear", "wolf"];

  const [grid, setGrid] = useState(initialGrid);
  const [answers, setAnswers] = useState(initialAnswers);
  const [guessedWords, setGuessedWords] = useState([]);

  const [selectedLetters, setSelectedLetters] = useState([]);

  const checkWord = () => {
    const word = selectedLetters.map(([row, col]) => grid[row][col]).join('');
    if (answers.includes(word)) {
      setGuessedWords([...guessedWords, word]);
      setSelectedLetters([]);
    } else {
      setSelectedLetters([]);
    }
  };

  const handleLetterClick = (row, col) => {
    const isAdjacent = selectedLetters.length === 0 || (
      Math.abs(selectedLetters[selectedLetters.length - 1][0] - row) <= 1 &&
      Math.abs(selectedLetters[selectedLetters.length - 1][1] - col) <= 1
    );

    if (isAdjacent) {
      setSelectedLetters([...selectedLetters, [row, col]]);
    }
  };

  const getLetterColor = (row, col) => {
    const isSelected = selectedLetters.some(([r, c]) => r === row && c === col);
    const letter = grid[row][col];
    const isGuessed = guessedWords.some(word => word.includes(letter));

    if (isGuessed) {
      return 'correct';
    } else if (isSelected) {
      return 'blue';
    } else {
      return '';
    }
  };

  return (
    <div className="sozjumbaq-container">
      <div className="question">Find all the animals hidden here:</div>
      <div className="grid-container">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((letter, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`grid-item ${getLetterColor(rowIndex, colIndex)}`}
                onClick={() => handleLetterClick(rowIndex, colIndex)}
              >
                {letter}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={checkWord}>Check</button>
    </div>
  );
};

export default Sozjumbaq;
