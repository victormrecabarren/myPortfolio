import React, { Component } from 'react'

class Console extends Component {

  state = {

  }

  render() {
    return(
      <>
        {
          this.props.projects.length
          ?
          this.props.projects.map(project=>(

            <div
              className="projectCard"
              key={project.id}>

              <div className={project.name}>
                <img
                  src={`/${project.icon}`}
                  alt={project.name}
                  className="cardIcon"
                 />
              </div>


              <h2 className="cardTitle">{project.name}</h2>
              <p className="cardText">Hosted on: {project.front_end_deployed}</p>
            </div>

          ))
          :
          null

        }
      </>
    )
  }
}

export default Console
