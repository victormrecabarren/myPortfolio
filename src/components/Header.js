import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
  render(){
    return(
      <>

      <p className="myName">Victor Recabarren</p>

      <div className="buttonsContainer">

        <Link
          to="/"
          onClick={() => {
            this.props.changeDisplay('portfolio')
          }}
          style={this.props.mode === 'portfolio' ? styles.active : null}
          className="headerButton btn btn-primary">
          <p style={{marginTop: "-1px"}}>Portfolio</p>
        </Link>
        <Link
          to="/about"
          onClick={() => {
            this.props.changeDisplay('about')
          }}
          style={this.props.mode === 'about' ? styles.active : null}
          className="headerButton btn btn-primary">
          <p style={{marginTop: "-1px", textAlign: "center"}}>About</p>
        </Link>
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
