import React from 'react';

type CellProps = {
  Cell: string;
  geussWords: string;
  wordleWord: string;
  rowColor: boolean;
  pos : {
    coll: number;
    row: number;
  }
};

const Cell: React.FC<CellProps> = ({
  Cell,
  geussWords,
  wordleWord,
  rowColor,
}) => {
  const cellColor = () => {
    const almost = geussWords[0]
  };

  return <div>{Cell}</div>;
};
export default Cell;
