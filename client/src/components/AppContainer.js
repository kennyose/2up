import React, {Component} from 'react'

import App from 'grommet/components/App'
import Split from 'grommet/components/Split'

import NavSideBar from './NavSideBar'

class AppContainer extends Component {
  render () {
    return (
      <App centered={false} >
        <Split flex='right' >
          <NavSideBar />
          {this.props.children}
        </Split>
      </App>
    )
  }
}

export default AppContainer