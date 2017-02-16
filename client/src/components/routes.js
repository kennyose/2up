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

const routes = (
  <Route path='/' component={AppContainer} >
  
    <Route component={Home} >
      <IndexRoute component={Homepage} />
    </Route>

    <Route path='/dashboard' component={Main} >
      <IndexRoute component={Dashboard} />
    </Route>

    <Redirect from='*' to='/' />
  </Route>
)

export default routes;