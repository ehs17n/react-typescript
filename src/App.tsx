import React, { useState } from 'react';

import Ticktack from './Ticktack';

const Wordle = [
  ['e', 'e', 'e', 'e', 'e'],
  ['e', 'e', 'e', 'e', 'e'],
  ['e', 'e', 'e', 'e', 'e'],
  ['e', 'e', 'e', 'e', 'e'],
  ['e', 'e', 'e', 'e', 'e'],
];

function App() {
  // const [board, setBoard] = useState<string[][]>(Wordle);

  return (
    <div className='App'>
      <Ticktack/>
      {/* <div className='board'>
        {board.map((row) => (
          <div className='row'>
            {row.map((cell) => (
              <div className='cell'>{cell}</div>
            ))}
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default App;
