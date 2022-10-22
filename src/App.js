import { BrowserRouter as Router,Route, Redirect,Switch } from 'react-router-dom'
import Users from './user/pages/user';
import NewPlace from './places/pages/NewPlace';
import React, { useState, useCallback } from 'react';

import MainNavigation from './shared/navigation/MainNavigation'
import UserPlaces from './places/pages/UserPlaces';
import Login from './auth/login';
import EditPlace from './places/pages/EditPlace';
import { authContext } from './shared/context/auth.context'
import { ToastContainer } from 'react-toast'

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const login = useCallback(() => {
    setIsLoggedIn(true)
  },[])
  
  const logout = useCallback(() => {
    setIsLoggedIn(false)
  },[])

  let routes;

  if(isLoggedIn){
    routes = (
      <React.Fragment>
          <Route path="/places/new" >
            <NewPlace />
          </Route>
          <Route path="/:userId/places" >
            <UserPlaces />
          </Route>
          <Route path="/places/edit/:placeId" >
            <EditPlace exact/>
          </Route>
          <Redirect to="/" />
      </React.Fragment>
    );
  }else{
    routes=(
      <React.Fragment>
      <Route path="/:userId/places" >
            <UserPlaces />
          </Route>
      <Route path="/auth" >
            <Login />
      </Route>
      <Redirect to="/" />
      </React.Fragment>
    )
  }

  return (
    <authContext.Provider value={{ isLoggedIn:isLoggedIn, login:login,logout:logout }}>
      {/* {isLoggedIn ? <Redirect to="/" /> : <Redirect to="/" />} */}
      
      <Router>
      <Route path="/" exact>
      {console.log("Called")}
        <Users />
      </Route>
        <MainNavigation />
        <main>
        <Switch>
          {routes}
        </Switch>
        </main>
      </Router>

      <ToastContainer position='bottom-right' delay={2000} />
    </authContext.Provider>
  );
}

export default App;
