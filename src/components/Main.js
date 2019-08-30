import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Link} from 'react-router-dom'

import Portfolio from './Portfolio'
import Console from './Console'


class Main extends Component {

  componentDidMount() {
    if (this.props.mode !== 'portfolio') {
      this.props.changeDisplay('portfolio')
    }
  }

  render() {
    return(
      <>

          <div className="portfolioComponent">
            <Portfolio
              projects={this.props.projects}
             />
          </div>

          <div className="console">
            <Console
              projects={this.props.projects}
              setCurrentProject={this.props.setCurrentProject}
             />
          </div>


    </>
    )
  }
}


export default Main
