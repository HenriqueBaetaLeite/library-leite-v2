import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Books from './components/Books';
import Test from './components/Test';
import BookDetails from './components/BookDetails';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import CardBooks from './components/CardBooks';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/books" component={Books} />
      <Route exact path={'/books/:id'} component={BookDetails} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
