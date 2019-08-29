import React, { Component } from 'react'
// import moon from './assets/images/moon.png'
import moon from '../assets/moon.png'
import spotify from '../assets/spotify.png'
import cupcake from '../assets/cupcake.png'

class Console extends Component {

  state = {
    moon: moon,
    spotify: spotify,
    cupcake: cupcake
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
                  // src={`../src/assets/images/${project.icon}`}
                  src={this.state[project.icon]}
                  alt={project.icon}
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
