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

  const checkwin = () => {};

  const playerClick = (idx: number) => {
    const copy = [...board];

    if (copy[idx] === '') {
      copy[idx] = player;
    }
    setBoard(copy);
    

    checkwin();

    player === 'X' ? setPlayer('O') : setPlayer('X');

    // if (player === 'O') {
    //   checkwin();

    //   setPlayer('X');
    // }
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
