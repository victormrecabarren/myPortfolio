import React, { Component } from 'react'

class Header extends Component {
  render(){
    return(
      <>

      <p className="myName">Victor Recabarren</p>

      <div className="buttonsContainer">

        <div
          onClick={() => {
            this.props.changeDisplay('portfolio')
          }}
          style={this.props.mode === 'portfolio' ? styles.active : null}
          className="headerButton btn btn-primary">
          <p style={{marginTop: "-1px"}}>Portfolio</p>
        </div>
        <div
          onClick={() => {
            this.props.changeDisplay('contact')
          }}
          style={this.props.mode === 'contact' ? styles.active : null}
          className="headerButton btn btn-primary">
          <p style={{marginTop: "-1px"}}>Contact Me</p>
        </div>
      </div>
      </>
    )
  }
}

const styles = {
  active: {
    backgroundColor: "rgba(20,15,45, 1)",
    color: "white",
  }
}

export default Header
