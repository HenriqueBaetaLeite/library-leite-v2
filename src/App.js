import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Books from './components/Books';

const App = () => {
  const id = 2;
  return (
    <div className="App">
      <h2>Library Leite</h2>
      <Books />
    </div>
  );
};

export default App;
