import React, { useEffect, useState } from 'react';
import { InferencePriority } from 'typescript';

import './App.css';
import Cell from './Cell';

const Wordle = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

const CorrectWords = ['master', 'gamer', 'track', 'crazy'];

const key = ['A', 'S', 'D'];
const key2 = ['Z', 'X', 'C'];

const App = () => {
  const randmomWord = ['asdzx', 'track', 'crazy'];
  const [board, setBoard] = useState(Wordle);
  const [geussWords, setGeussWords] = useState('');
  const [wordleWord, setWordleWord] = useState('');

  const [pos, setPos] = useState({
    row: 0,
    coll: 0,
  });

  const [rowColor, setRowColor] = useState(false);

  useEffect(() => {
    // const a = Math.floor(Math.random() * randmomWord.length);
    setWordleWord(randmomWord[0]);
  }, []);

  const KeyClicked = (key: string, e: React.MouseEvent<HTMLButtonElement>) => {
    if (pos.coll === 5 && pos.row === 5) return;
    if (pos.coll === 5) return;
    setGeussWords((prev) => prev + key.toLowerCase());

    const copy = [...board];
    copy[pos.row][pos.coll] = key;
    setBoard(copy);

    setPos((prev) => ({ ...prev, coll: prev.coll + 1 }));
  };

  const EnterClicked = () => {
    if (pos.coll === 5) {
      CheckRow();
      setRowColor(true);
      setTimeout(() => {
        setPos({ coll: 0, row: pos.row + 1 });
        setGeussWords('');
      }, 3000);

      return;
    }
  };
  const BackspaceClicked = () => {
    if (pos.coll === 0) return;
    const copy = [...board];
    copy[pos.row][pos.coll - 1] = '';
    setBoard(copy);
    setPos((prev) => ({ ...prev, coll: prev.coll - 1 }));
  };

  function CheckRow() {}

  return (
    <div className='app'>
      {board.map((row) => {
        return (
          <div className='row'>
            {row.map((cell, idx) => {
              return (
                <div className='cell'>
                  <Cell
                    Cell={cell}
                    wordleWord={wordleWord}
                    geussWords={geussWords}
                    rowColor={rowColor}
                    pos={pos}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
      <div className='key'>
        {key.map((key) => {
          return <button onClick={(e) => KeyClicked(key, e)}>{key}</button>;
        })}
        {key2.map((key) => {
          return <button onClick={(e) => KeyClicked(key, e)}>{key}</button>;
        })}
        <button onClick={() => EnterClicked()}>KeyEnter</button>
        <button onClick={() => BackspaceClicked()}>Backspace</button>
      </div>
    </div>
  );
};
export default App;
