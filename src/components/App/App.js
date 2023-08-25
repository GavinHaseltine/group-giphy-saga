import React from 'react';
import SearchView from '../SearchView/SearchView';
import FavoritesView from '../FavoritesView/FavoritesView'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
function App(props) {
  return (
    <div>
      <Router>
        <Route exact path='/'>
          <SearchView/>
        </Route>
        <Route exact path='/favoritesview'>
          <FavoritesView/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
