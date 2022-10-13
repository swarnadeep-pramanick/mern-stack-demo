import { BrowserRouter as Router,Route, Redirect,Switch } from 'react-router-dom'
import Users from './user/pages/user';
import NewPlace from './places/pages/NewPlace';
import React from 'react';

import MainNavigation from './shared/navigation/MainNavigation'
import UserPlaces from './places/pages/UserPlaces';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" >
          <UserPlaces />
        </Route>
        <Route path="/places/new" >
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
      </main>
    </Router>
  );
}

export default App;
