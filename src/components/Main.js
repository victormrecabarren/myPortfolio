import React, { Component } from 'react'

import Contact from './Contact'
import Portfolio from './Portfolio'
import Console from './Console'


class Main extends Component {
  render() {
    return(
      <>

      {
        this.props.mode === 'contact'
        ?
        <div className="contactComponent">
        <Contact />
        </div>
        :
        <>
          <div className="portfolioComponent">
            <Portfolio />
          </div>

          <div className="console">
            <Console />
          </div>
        </>
      }
      </>
    )
  }
}


export default Main
