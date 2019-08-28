import React, { Component } from 'react'

class Portfolio extends Component {
  render(){
    return(
      <>
        <div className="mainInfo">
          <h3>Front-End Developer and Software Engineer</h3>
          <h5>Creating applications and web pages with clean, intuitive UI.</h5>
        </div>



        <div className="displayPicsContainer">

          <div className="picsLeft">

            <div className="topLeft pics">
              <div className="overlay"></div>
            </div>

            <div className="bottomLeft pics">
              <div className="overlayActive">
                <h3 className="overlayText">browse below to learn more</h3>
              </div>
            </div>

          </div>

          <div className="picsRight">

            <div className="topRight pics">
              <div className="overlay"></div>
            </div>

            <div className="bottomRight pics">
              <div className="overlay"></div>
            </div>

          </div>
        </div>

      </>
    )
  }
}

export default Portfolio
