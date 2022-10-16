import { BrowserRouter as Router,Route, Redirect,Switch } from 'react-router-dom'
import Users from './user/pages/user';
import NewPlace from './places/pages/NewPlace';
import React from 'react';

import MainNavigation from './shared/navigation/MainNavigation'
import UserPlaces from './places/pages/UserPlaces';
import Login from './auth/login';
import EditPlace from './places/pages/EditPlace';

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
        <Route path="/places/:placeId" >
          <EditPlace />
        </Route>
        <Route path="/auth" >
          <Login />
        </Route>
        <Redirect to="/" />
      </Switch>
      </main>
    </Router>
  );
}

export default App;
