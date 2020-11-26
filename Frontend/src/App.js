import React from 'react';
import kanji from './data/kanji.json';

/**
 * Simple component with no state.
 *
 * See the basic-react from lecture 11 for an example of adding and
 * reacting to changes in state and lecture 16 for details on Material-UI
 *
 * @return {object} JSX
 */
function App() {
  const jpChar = '\u4e21';
  const character = kanji[1].character;
  return (
    <div>
      {character}
      {jpChar}
    </div>
  );
}

export default App;
