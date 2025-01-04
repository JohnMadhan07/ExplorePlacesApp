import React, { useCallback, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Authenticate from "./users/pages/Authenticate";
import { AuthContext } from "./shared/components/context/Auth-context";

function App() {
  const [isLoggedIn, setisLoggedIn]=useState(false)
  const login=useCallback(()=>{
    setisLoggedIn(true)
  },[])
  const logout=useCallback(()=>{
    setisLoggedIn(false)
  },[])
  return (
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn, login:login, logout:logout}}>
      <Router>
        <MainNavigation></MainNavigation>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userid/places" exact>
            <UserPlaces></UserPlaces>
          </Route>
          <Route path="/places/new" exact>
            <NewPlace></NewPlace>
          </Route>
          <Route path="/places/:placeId" exact>
            <UpdatePlace />
          </Route>
          <Route path="/auth" exact>
            <Authenticate></Authenticate>
          </Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
