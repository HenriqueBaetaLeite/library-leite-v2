import React from 'react';

import Books from './components/Books';
import Test from './components/Test';
import BookDetails from './components/BookDetails';

const App = () => {
  return (
    <div className="App">
      <h2>Library Leite</h2>
      {/* <Books /> */}
      <Test />
      <BookDetails />
    </div>
  );
};

export default App;
