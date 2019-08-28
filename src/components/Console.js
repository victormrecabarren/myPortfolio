import React, { Component } from 'react'

class Console extends Component {
  render() {
    return(
      <>
        {
          this.props.projects.length
          ?
          this.props.projects.map(project=>(

            <div className="projectCard">
              <p>{project.name}</p>
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
