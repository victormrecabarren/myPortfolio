import React, { Component } from 'react'
import {Link} from 'react-router-dom'


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

            {
              this.props.projects.filter(project=> project.name==="Festival Scheduler").map(project=>
                <Link
                  to="/project"
                  className="topLeft pics"
                  key={project.id}
                  onClick={() => {
                    this.props.setCurrentProject(project)
                  }}
                  >
                  </Link>
            )}



            <div className="bottomLeft pics">
              <a
                href="https://github.com/victormrecabarren"
                className="overlayActive">
                <h3 className="overlayText">View my GitHub!</h3>
              </a>
            </div>

          </div>

          <div className="picsRight">

            {
              this.props.projects.filter(project=> project.name==="Spotify (Recreated!)").map(project=>
                <Link
                  to="/project"
                  className="topRight pics"
                  key={project.id}
                  onClick={() => {
                    this.props.setCurrentProject(project)
                  }}
                  >
                  </Link>
            )}

            {
              this.props.projects.filter(project=> project.name==="Cupcake Shop").map(project=>
                <Link
                  to="/project"
                  className="bottomRight pics"
                  key={project.id}
                  onClick={() => {
                    this.props.setCurrentProject(project)
                  }}
                  >
                  </Link>
            )}



          </div>
        </div>

      </>

    )
  }
}

export default Portfolio
