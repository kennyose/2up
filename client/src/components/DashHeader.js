import React, {Component} from 'react'

import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';

class DashHeader extends Component {
  render () {
    return (
      <div>
        <Header size='small' ><Heading align='center' >DASHBOARD</Heading></Header>
      </div>
    )
  }
}

export default DashHeader