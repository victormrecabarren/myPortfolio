import React, { Component } from 'react'
import github from '../assets/github.png'

class Project extends Component {
  render() {
    let {project} = this.props
    return(
      <div className="projectComponent">

        <div className="projectDescriptionBox">
          <h1 style={{fontWeight: "bolder"}}>{project.name}</h1>

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
              {
                project.clientlink
                ?
                <a
                  href={project.clientlink}
                  target="_blank"
                  >View Project!</a>
                :
                null
              }
          </div>
        </div>

        <a
          href={project.clientlink}
          target="_blank"
          className="projectImageBox">
          <img
            src={project.screenshot}
            className="projectScreenshot"
            alt={project.name}
          />
        </a>

      </div>
    )
  }
}

export default Project
