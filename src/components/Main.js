import React, { Component } from 'react'

import Contact from './Contact'
import Portfolio from './Portfolio'


class Main extends Component {
  render() {
    return(
      <>

      {
        this.props.mode === 'contact'
        ?
        <Contact />
        :
        <Portfolio />
      }


      </>
    )
  }
}


export default Main
