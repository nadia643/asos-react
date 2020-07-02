import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar';
import Bookings from './pages/Bookings';
import Home from './pages/Home';
import Ingredient from './pages/Ingredient';
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
          <Route path="/ingredient">
            <Ingredient />
          </Route>
          <Route path="/bookings">
            <Bookings />
          </Route>
        </Switch>
      </Router>
      {/* <SearchForm /> */}
    </div>
  );
}

export default App;
