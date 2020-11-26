import React from 'react';
import kanji from './data/kanji.json';
import kana from './data/kana.json';

/**
 * Simple component with no state.
 *
 * See the basic-react from lecture 11 for an example of adding and
 * reacting to changes in state and lecture 16 for details on Material-UI
 *
 * @return {object} JSX
 */
function App() {
  const character = kanji[1].character;
  const akana = kana.katakana['a'];
  return (
    <div>
      {character}
      {akana}
    </div>
  );
}

export default App;
