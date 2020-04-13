import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './components/Home';
import Todo from './components/Todo';
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Todo} />
    <Route exact path="/login" component={Home} />
  </Switch>
);

export default App;
