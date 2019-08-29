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

            <div
              href={this.props.projects.filter(project=> project.name==="Festival Scheduler").map(project=>project.clientlink)}
              className="topLeft pics">
            </div>

            <div className="bottomLeft pics">
              <div className="overlayActive">
                <h3 className="overlayText">click projects below to learn more</h3>
              </div>
            </div>

          </div>

          <div className="picsRight">

            <div
              href={this.props.projects.filter(project=> project.name==="Spotify (Recreated!)").map(project=>project.clientlink)}
              className="topRight pics">
            </div>

            <div className="bottomRight pics">

            </div>

          </div>
        </div>

      </>

    )
  }
}

export default Portfolio