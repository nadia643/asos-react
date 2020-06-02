import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Random from './pages/Random';
import SingleCocktail from './pages/SingleCocktail';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cocktail/:id">
            <SingleCocktail />
          </Route>
          <Route path="/random">
            <Random />
          </Route>
        </Switch>
      </Router>
      {/* <SearchForm /> */}
    </div>
  );
}

export default App;
