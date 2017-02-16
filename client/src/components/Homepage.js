import React, { Component } from 'react'

import Section from 'grommet/components/Section'
import Headline from 'grommet/components/Headline'

class Homepage extends Component {
  render() {
    return (
      <div>
        <Section full={true} >
          <Headline align='center' >
            Finacial Freedom
          </Headline>
        </Section>
      </div>
    )
  }
}

export default Homepage