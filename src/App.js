import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';
import './styles/App.css';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Switch>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/">
          <Redirect to="/books" />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
