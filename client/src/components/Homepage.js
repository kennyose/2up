import React, { Component } from 'react'

import Section from 'grommet/components/Section'
import Headline from 'grommet/components/Headline'
import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'


class Homepage extends Component {
  render() {
    return (
      <div>
        <Section full={true} >
          <Headline align='center' >
            Finacial Freedom
          </Headline>
        </Section>
        <Section>
          <Heading align='center' tag='h2' strong={true} className='underlineHeader' >About 2Up</Heading>
          <Box justify='center' direction='row' >
            <Box align='center' pad='medium' margin='small' separator='vertical' colorIndex='light-2' basis='1/3' >
              Box 1
            </Box>
            <Box align='center' pad='medium' margin='small' separator='vertical' colorIndex='light-2' basis='1/3'>
              Box 2
            </Box>
            <Box align='center' pad='medium' margin='small' separator='vertical' colorIndex='light-2' basis='1/3'>
              Box 3
            </Box>
          </Box>
        </Section>
        <Section>
        
        </Section>
      </div>
    )
  }
}

export default Homepage