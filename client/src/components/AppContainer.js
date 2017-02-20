import React, { Component } from 'react'
import { browserHistory } from 'react-router';


import App from 'grommet/components/App'
import Split from 'grommet/components/Split'

import NavSideBar from './NavSideBar'
import DashNavBar from './DashNavBar'

var NavBar = NavSideBar;

browserHistory.listen(location => {
  console.log(location)
  if (location.pathname.split('/')[1] === 'dashboard') {
    NavBar = DashNavBar
  } else {
    NavBar = NavSideBar
  }

})

class AppContainer extends Component {
  render() {
    return (
      <App centered={false} >
        <Split flex='right' >
          <NavBar />
          {this.props.children}
        </Split>
      </App>
    )
  }
}

export default AppContainer