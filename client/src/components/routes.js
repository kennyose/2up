import React from 'react';
import {
  Route,
  IndexRoute,
  Redirect
} from 'react-router';

// Import Components
import AppContainer from './AppContainer';
import Home from './Home'
import Homepage from './Homepage';

const routes = (
  <Route path='/' component={AppContainer} >
    <Route component={Home} >
      <IndexRoute component={Homepage} />
    </Route>


    <Redirect from='*' to='/' />
  </Route>
)

export default routes;