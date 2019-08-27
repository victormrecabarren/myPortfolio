import React, { Component } from 'react'

class Header extends Component {
  render(){
    return(
      <>
      <p>my name</p>
      <div className="buttonsContainer">
        <div className="headerButton">About Me</div>
        <div className="headerButton">portfolio</div>
        <div className="headerButton">contact me</div>
      </div>
      </>
    )
  }
}

export default Header
