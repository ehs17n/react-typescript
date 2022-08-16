import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { AppContext } from './App';
type CellProps = {
  Cell: string;
  // geussWords: string;
  // wordleWord: string;
  // rowColor: boolean;
  // pos: {
  //   coll: number;
  //   row: number;
  // };
};
//asdzx
interface AppContextInterface {
  pos: {
    row: number;
    coll: number;
  };
  geussWords: string;
  wordleWord: string;
  rowColor: boolean;
}

const Cell: React.FC<CellProps> = ({ Cell }) => {
  const [cellState, setCellState] = useState('green');
  const context = useContext(AppContext)




    const letter = board[attemptVal][letterPos];
    // const correct = correctWord.toUpperCase()[letterPos] === letter;
    // const almost =
    //   !correct && letter !== '' && correctWord.toUpperCase().includes(letter);
    // const letterState =
    //   currAttempt.attempt > attemptVal &&
    //   (correct ? 'correct' : almost ? 'almost' : 'error');

    // useEffect(() => {
    //   if (letter !== '' && !correct && !almost) {
    //     console.log(letter);
    //     setDisabledLetters((prev) => [...prev, letter]);
    //   }
    // }, [currAttempt.attempt]);



  return (
    <div className={cellState} id={cellState}>
      {Cell}
    </div>
  );
};
export default Cell;
