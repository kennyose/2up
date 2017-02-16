import React, { Component } from 'react'

import Article from 'grommet/components/Article'
import Footer from 'grommet/components/Footer'


class Main extends Component {
  render() {
    return (
      <Article>
        {this.props.children}
        <Footer>
          Page Footer
        </Footer>
      </Article>
    )
  }
}

export default Main