
import React, { useState } from 'react';

import './App.css';
import Button from './minesweeper/components/button/Button';

const Wordle = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

const key = ['A', 'S', 'D'];
const key2 = ['Z', 'X', 'C'];

const App = () => {
  const [board, setBoard] = useState(Wordle);

  const [pos, setPos] = useState({
    row: 0,
    coll: 0,
  });

  const KeyClicked = (key: string, e: React.MouseEvent<HTMLButtonElement>) => {
    if (pos.coll === 5 && pos.row === 5) return;
    if (pos.coll === 5) return;
    const copy = [...board];
    copy[pos.row][pos.coll] = key;
    setBoard(copy);
     
   
    setPos({ ...pos, coll: pos.coll + 1 });
  };

  const EnterClicked = () => {

  
    if (pos.coll === 5) {
      setPos({ coll: 0, row: pos.row + 1 });

      return;
    }
  };

  return (
    <div className='app'>
      {board.map((row) => {
        return (
          <div className='row'>
            {row.map((cell, idx) => {
              return <div className='cell'>{cell}</div>;
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
      </div>
    </div>
  );
};
export default App;
