import React, { Component } from 'react'

import Section from 'grommet/components/Section'
import Headline from 'grommet/components/Headline'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Section full={true} >
          <Headline align='center' >
            Welcome, Dashboard
          </Headline>
        </Section>
      </div>
    )
  }
}

export default Dashboard