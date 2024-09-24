import React from 'react';
import{BrowserRouter as Router} from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
function App() {
  return (
  <Router>
    <Switch>
    <Route path='/' exact><Users/></Route>
    <Route path='/places/new' exact><NewPlace></NewPlace></Route>
    <Redirect path='/'></Redirect>
    </Switch>
  </Router>
  )
}

export default App;
