import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import RoomPage from './pages/RoomPage';
import SingleRoom from './pages/SingleRoom';

function App() {
  return (
    <Router>
    <div className="App">

    <Switch>
    <Route exact path="/">
    <HomePage/>
    </Route>
    <Route
    path="/rooms"
    exact
    component={RoomPage}
  />
  <Route
  path="/singlerooms/room"
  exact
  component={SingleRoom}
/>
<Route component={ErrorPage} />
    </Switch>
    </div>
    </Router>
  );
}