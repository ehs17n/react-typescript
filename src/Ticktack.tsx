import { log } from 'console';
import React, { useState } from 'react';

import './App.css';

interface PlayerClickType {
  e: React.MouseEvent<HTMLButtonElement>;
  idx: number;
}

const TickTack = () => {
  const tictack = ['', '', '', '', '', '', '', '', ''];

  const [board, setBoard] = useState(tictack);
  const [player, setPlayer] = useState('X'); // const  Player = "X"

  const checkwin = () => {
    const pattern = ['X', 'X', 'X', '', '', '', '', '', ''];

  
      const copy = [...board];

      console.log(pattern);
      

  };

  const playerClick = (idx: number) => {
    if (player === 'X') {


      const copy = [...board];
      copy[idx] = 'X';

      setBoard(copy);

      checkwin();

      // setPlayer('O');
    }
    if (player === 'O') {
  

      checkwin();

      setPlayer('X');
    }
  };

  return (
    <div className='board'>
      {board.map((cell, idx) => {
        return (
          <button onClick={() => playerClick(idx)} className='btn'>
            {cell}
          </button>
        );
      })}
    </div>
  );
};

export default TickTack;
