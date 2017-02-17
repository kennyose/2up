import React, { Component } from 'react'

import Section from 'grommet/components/Section'
import Headline from 'grommet/components/Headline'
import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'


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
          <hr/>
          <Heading align='center' tag='h2' strong={true} >WHAT WE OFFER</Heading>
          <hr/>
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
        <Section full={true} >
          <hr/>
          <Heading align='center' tag='h2' strong={true} >OUR PACKAGES</Heading>
          <hr/>
          <Paragraph align='center' size='large' >Choose from our Awesome Packages below:</Paragraph>
          <Box align='center' direction='row' >
            <Box align='center' pad='medium' margin='small' separator='all' colorIndex='neutral-4-a' basis='1/3'>
              Box 3
            </Box>
            <Box align='center' pad='medium' margin='small' separator='all' colorIndex='neutral-4-a' basis='1/3'>
              Box 3
            </Box>
            <Box align='center' pad='medium' margin='small' separator='all' colorIndex='neutral-4-a' basis='1/3'>
              Box 3
            </Box>
          </Box>
        </Section>
      </div>
    )
  }
}

export default Homepage