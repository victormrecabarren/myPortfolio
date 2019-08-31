import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'


import github from '../assets/github.png'

class Project extends Component {

  componentDidMount() {
    if (this.props.mode !== 'show') {
      this.props.changeDisplay('show')
    }
  }

  render() {
    let {project} = this.props
    return(
      <div className="projectComponent">

        <div className="projectDescriptionBox">
          <span className="backButton">
          <Link
            to="/"
          >
          &lt; back
          </Link></span>
          <h1 style={{fontWeight: "bolder", textIndent: "0"}}>
          {project.name}
          </h1>

          <h5>(Prototype: Built during a 1 week sprint)</h5>

          <div className="frameworkBox">
            <h6
              style={{fontWeight: "bolder"}}
              >
                Front-end framework: <span className="frameworkText">{project.front_framework}</span>
              </h6>
            <h6
              style={{fontWeight: "bolder"}}
              >
                Back-end framework: <span className="frameworkText">{project.back_framework}</span>
              </h6>
          </div>



          <small>{project.description}</small>
          <p>Front-end deployed to: {project.front_end_deployed}</p>
          <p>Back-end deployed to: {project.back_end_deployed}</p>
          <div className="linksBox">
            <a
              href={project.repolink}
              target="_blank"
              >Github Repo</a>
          </div>
        </div>


        {
          project.clientlink ?
          <a
          href={project.clientlink}
          target="_blank"
          className="projectImageBox"
          >
          <h2 style={{textAlign: "center", padding: "5%"}}>Launch App</h2>
          <img
            src={project.screenshot}
            className="projectScreenshot"
            alt={project.name}
          />
        </a>

        :

        <div
        style={{height: "80%"}}
        className="projectImageBox">

            <ReactPlayer
               playing
               controls
               loop
               url='https://recabarren-portfolio.s3.amazonaws.com/RPReplay_Final1566668125.mp4'
               wrapper="span"
             />
        </div>



      }





      </div>
    )
  }
}

export default Project
