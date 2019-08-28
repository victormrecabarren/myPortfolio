import React, { Component } from 'react'

class Console extends Component {
  render() {
    return(
      <>
        {
          this.props.projects.length
          ?
          this.props.projects.map(project=>(
            <p>{project.name}</p>
          ))
          :
          null

        }
      </>
    )
  }
}

export default Console
