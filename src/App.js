import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Main from './components/Main'
import Project from './components/Project'

class App extends Component {
  state = {
    projects: [],
    mode: 'portfolio',
  }

  changeDisplay = (mode) => {
    this.setState({
      mode: mode
    })
  }

  render() {
    return (
      <>

      <header className="headerComponent">
        <Header
          changeDisplay={this.changeDisplay}
          mode={this.state.mode}
         />
      </header>

      <div
        className="mainComponent">
        <Main
          mode={this.state.mode}
         />
      </div>

      <div className="projectsContainer">
        {
          this.state.projects.length
          ?
          this.state.projects.map(project=>(
            <Project
              project={project}
            />
          ))
          : null
        }
      </div>

      </>
    )
  }
}



export default App
