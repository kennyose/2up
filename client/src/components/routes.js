import React from 'react';
import {
  Route,
  IndexRoute,
  Redirect
} from 'react-router';

// Import Components
import AppContainer from './AppContainer';
import Home from './Home';
import Homepage from './Homepage';
import Main from './Main';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';

const routes = (
  <Route path='/' component={AppContainer} >
  
    <Route component={Home} >
      <IndexRoute component={Homepage} />
      <Route path='login' component={Login} />
      <Route path='register' component={Register} />
    </Route>

    <Route path='/dashboard' component={Main} >
      <IndexRoute component={Dashboard} />
    </Route>

    <Redirect from='*' to='/' />
  </Route>
)

export default routes;