import React, { Component } from 'react'

class Header extends Component {
  render(){
    return(
      <>

      <p>Victor Recabarren</p>
      
      <div className="buttonsContainer">
        <div
          onClick={() => {
            this.props.changeDisplay('about')
          }}
          style={this.props.mode== 'about' ? styles.active : null}
          className="headerButton btn btn-primary">
          <p style={{marginTop: "-1px"}}>About Me</p>
        </div>
        <div
          onClick={() => {
            this.props.changeDisplay('portfolio')
          }}
          style={this.props.mode== 'portfolio' ? styles.active : null}
          className="headerButton btn btn-primary">
          <p style={{marginTop: "-1px"}}>Portfolio</p>
        </div>
        <div
          onClick={() => {
            this.props.changeDisplay('contact')
          }}
          style={this.props.mode== 'contact' ? styles.active : null}
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
    backgroundColor: "rgba(28,79,127, 1)",
    color: "white"
  }
}

export default Header
