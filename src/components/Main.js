import React, { Component } from 'react'

import SideBar from './Sidebar'
import Display from './Display'

class Main extends Component {
  render() {
    return(
      <>
      <div className="sideBarComponent">
        <SideBar />
      </div>

        <div className="displayComponent">
          <Display
            mode={this.props.mode}
           />
        </div>
      </>
    )
  }
}

export default Main
