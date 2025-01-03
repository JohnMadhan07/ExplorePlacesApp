import React from 'react';
import{BrowserRouter as Router} from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Authenticate from './users/pages/Authenticate';

function App() {
  return (
  <Router>
    <MainNavigation></MainNavigation>
    <Switch>
    <Route path='/' exact><Users/></Route>
    <Route path='/:userid/places' exact><UserPlaces></UserPlaces></Route>
    <Route path='/places/new' exact><NewPlace></NewPlace></Route>
    <Route path= '/places/:placeId' exact><UpdatePlace/></Route>
    <Route path="/auth" exact><Authenticate></Authenticate></Route>
    <Redirect to='/'></Redirect>
    </Switch>
  </Router>
  )
}

export default App;
