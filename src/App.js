import React, { Component } from 'react'
import './App.css'
import { HashRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Link} from 'react-router-dom'

import Header from './components/Header'
import Main from './components/Main'
import Project from './components/Project'

import baseURL from './constants.js'

class App extends Component {
  state = {
    projects: [],
    mode: 'portfolio',
    currentProject: '',
  }

  componentDidMount = () => {
    fetch(baseURL + '/projects')
    .then(res=>res.json())
    .then(projects=>this.setState({
      projects: projects
    }))
    .catch(err=>console.log(err))
    //
    // fetch(`https://react-rails-spotify.herokuapp.com/playlists`, {mode:'no-cors'})
    // .then(res=>console.log('woke up spotify'))
    //
    // fetch(`https://mycupcakesapi.herokuapp.com/cart_items`, {mode:'no-cors'})
    // .then(res=>console.log('woke up cupcakes'))
    //
    // fetch(`https://festivalscheduler.herokuapp.com/CampFlogGnaw/Saturday/Lineup`, {mode:'no-cors'})
    // .then(res=>console.log('woke up scheduler'))

  }

  changeDisplay = (mode) => {
    this.setState({
      mode: mode
    })
  }

  setCurrentProject = (project) => {
    console.log(project)
  }

  render() {
    return (
      <>
      <HashRouter>
        <header className="headerComponent">
          <Header
            changeDisplay={this.changeDisplay}
            mode={this.state.mode}
           />
        </header>

          <Route
            path="/"
            exact
            render={(routeProps) => (
              <div
                className="mainComponent">
              <Main
                {...routeProps}
                mode={this.state.mode}
                projects={this.state.projects}
                setCurrentProject={this.setCurrentProject}
              />
            </div>
            )}
            />

            <Route
              path='/project'
              exact
              render={(routeProps) => (
                <Project
                  {...routeProps}
                  project={this.state.currentProject}
                />
              )}
            />


      </HashRouter>
      </>
    )
  }
}



export default App
